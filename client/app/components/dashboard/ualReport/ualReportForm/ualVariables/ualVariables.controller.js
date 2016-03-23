import $ from 'jquery';

class UalVariablesController {
  /*@ngInject*/
  constructor(close, $timeout, $filter, $q, $rootScope, DataSourceService, ualVariablesCancelModal, ualVariablesDeteleAllModal, datasource, selecteds) {
    // SERVICES
    this._close = close;
    this._datasourceService = DataSourceService;
    this._cancelmodal = ualVariablesCancelModal;
    this._deleteallmodal = ualVariablesDeteleAllModal;
    this._filter = $filter;
    this._q = $q;
    this._timeout = $timeout;
    this.scrolling  = {
      "selected-list": false
    }

    // VARS / PRIVATE
    this._datasource = datasource;
    this._selecteds = selecteds;

    // VARS / PUBLIC
    this.variables = {items: []}
    this.selecteds = _.clone(selecteds) || [];
    this.loaded = false;

    this.standardFilter = {};
    this.selectedFilter = {};

    this._initialize();

    this._suscriptions = [];
    this._suscriptions.push($rootScope.$on('SESSION.LOGOUT', () =>  this._closemodal(true)));
    this._suscriptions.push($rootScope.$on('SESSION.EXPIRED', () => this._closemodal(true)));
  }

  _closemodal(response) {
    this._suscriptions.forEach(suscription => suscription());
    this._close(response);
  }


  isSelected(variable) {
    return _.find(this.selecteds, { 'id': variable.id });
  }

  toggle(variable) {
    this.isSelected(variable) ?
      _.remove(this.selecteds, { 'id': variable.id }) :
      this.selecteds.push(variable);
  }

  isSelectedGroup(group) {
    return _.reduce(group.items, (result, item) => result && this.isSelected(item), true);
  }
  toggleGroup(group) {
    if (this.isSelectedGroup(group)) {
      const ids = _.map(group.items, item => item.id);
      this.selecteds = _.reject(this.selecteds, item => _.includes(ids, item.id));
    } else {
      this.selecteds = _.chain(this.selecteds)
        .union(group.items)
        .uniq('id')
        .value();
    }
  }

  selectAll(){
    const filters = this._filter("filter")(this.variables.items, this.standardFilter);
    this.selecteds = _.clone(filters);
  }
  deleteAll() {
    this._deleteallmodal.open()
    .then(response => {
      if (response) {
        const filters = this._filter("filter")(this.selecteds, this.selectedFilter);
        const ids = _.map(filters, item => item.id);
        this.selecteds = _.reject(this.selecteds, item => _.includes(ids, item.id));
      }
    });
  }

  onScrollStart() {
    $('#selected-searchbox').focus();
  }
  scrollTo(binId) {
    if ( !this.scrolling['selected-list'] ) {
      let container = { e: $("#selected-list") };
      container.top = container.e.offset().top;
      container.height = container.e.height();
      container.bottom = container.top + container.height;

      let item = { e: $("#"+binId) };
      item.top = item.e.offset().top;
      item.height = item.e.height();
      item.bottom = item.top + item.height;

      let timeout = this._timeout.bind(this);

      if ( (item.top - item.height ) < container.top && container.top < item.bottom ) {
        this.scrolling['selected-list'] = true;
        $("#selected-list").mCustomScrollbar("scrollTo", "+=200",
          {callback: timeout(() => {
            this.scrolling['selected-list'] = false;
          }, 500) } );
      }
      if ( item.top < container.bottom && container.bottom < (item.bottom + item.height) ) {
        this.scrolling['selected-list'] = true;
        $("#selected-list").mCustomScrollbar("scrollTo", "-=200",
          {callback: timeout(() => {
            this.scrolling['selected-list'] = false;
          }, 500) } );
      }
    }

  }
  onDrop(id, binId) {
    let from =  _.parseInt(id.split('_')[0]);
    let to = _.parseInt(binId.split('_')[0]);
    let variable = this.selecteds[from];

    this.changeOrder(this.selecteds[from], to + 1);
  }
  changeOrder(variable, order) {
    _.remove(this.selecteds, { 'id': variable.id });
    this.selecteds.splice(order - 1, 0, variable);
  }
  itemPosition(variable) {
    return _.findIndex(this.selecteds, { 'id': variable.id });
  }

  apply() {
    this._closemodal(this.selecteds);
  }
  cancel() {
    if ( this.hasChange() ) {
      this._cancelmodal.open()
        .then(response => response && this._closemodal(this._selecteds) );
    } else {
      this._closemodal(this._selecteds);
    }
  }

  hasChange() {
    let change = false;
    if (this._selecteds.length === this.selecteds.length) {
      for (let i = 0; i < this._selecteds.length && !change; i++) {
        change = (this._selecteds[i].id !== this.selecteds[i].id);
      }
    } else {
      change = true;
    }
    return change;
  }

  _initialize() {
    this._datasourceService.variables(this._datasource)
    .then(variables => {
      this.variables = variables.data;
      this.loaded = true;
    },
    error => console.error(error),
    progress => this.variables = progress.data);
  }
}

export default UalVariablesController;
