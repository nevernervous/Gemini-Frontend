import $ from 'jquery';

class UalVariablesController {
  /*@ngInject*/
  constructor(close, $filter, $q, $rootScope, DataSourceService, ualVariablesCancelModal, ualVariablesDeteleAllModal, datasource, selecteds) {
    // SERVICES
    this._close = close;
    this._datasourceService = DataSourceService;
    this._cancelmodal = ualVariablesCancelModal;
    this._deleteallmodal = ualVariablesDeteleAllModal;
    this._filter = $filter;
    this._q = $q;

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
  
  showTooltip(e){
      var p = $("#"+e.target.id);
      var offset = p.offset();
      
      var parentWidth = p.width();
      var childWidth = p.children().find("span").width();
      
      if (parentWidth && childWidth) p.children().find("span").first().next().css("left", (childWidth > parentWidth ?  parentWidth : childWidth) + offset.left + 23);
      if (offset) p.children().find("span").first().next().css("top", offset.top + 4);
      
      p.children().find("span").first().next().css("display", "inline");            
  }

  hideTooltip(e){ 
      var p = $("#"+e.target.id);
      p.children().find("span").first().next().css("display", "none");
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
