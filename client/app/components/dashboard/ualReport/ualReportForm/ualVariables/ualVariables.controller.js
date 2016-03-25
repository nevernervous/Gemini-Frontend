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
    this.scrolling  = false;

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
    if ( !this.scrolling ) {
      let container = { e: $("#selected-list") };
      container.top = container.e.offset().top;
      container.height = container.e.height();
      container.bottom = container.top + container.height;

      let item = { e: $("#"+binId) };
      item.top = item.e.offset().top;
      item.height = item.e.height();
      item.bottom = item.top + item.height;

      if ( !item.e.hasClass('last') && !item.e.hasClass('first') ) {
        let timeout = this._timeout.bind(this);

        if ( (item.top - item.height ) < container.top && container.top < item.bottom ) {
          this.scrolling = true;
          $("#selected-list").mCustomScrollbar("scrollTo", "+=200",
            { scrollEasing:"linear",
              callback: timeout(() => {
              this.scrolling = false;
            }, 500) } );
        }
        if ( item.top < container.bottom && container.bottom < (item.bottom + item.height) ) {
          this.scrolling = true;
          $("#selected-list").mCustomScrollbar("scrollTo", "-=200",
            { scrollEasing:"linear",
              callback: timeout(() => {
              this.scrolling = false;
            }, 500) } );
        }
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
  showTooltip(e){
    let span = $("#"+e.target.id);
    let checkboxItem = span.parent().parent();
    let offset = checkboxItem.offset();
    let parentWidth = checkboxItem.width();
    let childWidth = span.width();
    let tooltip = span.first().next();

    offset.left = (childWidth > parentWidth ?  parentWidth : (childWidth + 23)) + offset.left;
    offset.top -= ((tooltip.height() / 2) - ((span.height() / 2) ) );
    offset.top += window.isIE || window.isFirefox ? 7 : 5;

    tooltip.removeClass("-hide-tooltip").addClass("-show-tooltip");
    tooltip.css(offset);
  }

  hideTooltip(){
    $(".-show-tooltip").removeClass("-show-tooltip").addClass("-hide-tooltip");
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
