class UalVariablesController {
  /*@ngInject*/
  constructor(close, $q, DataSourceService, ualVariablesCancelModal, ualVariablesDeteleAllModal, datasource, selecteds) {
    // SERVICES
    this._close = close;
    this._datasourceService = DataSourceService;
    this._cancelmodal = ualVariablesCancelModal;
    this._deleteallmodal = ualVariablesDeteleAllModal;
    this._q = $q;

    // VARS / PRIVATE
    this._datasource = datasource;
    this._selecteds = selecteds;

    // VARS / PUBLIC
    this.variables;
    this.selecteds = _.clone(selecteds) || [];
    this.loaded = false;

    this._initialize();
  }

  isSelected(variable) {
    return _.find(this.selecteds, { 'id': variable.id });
  }
  toggle(variable) {
    this.isSelected(variable) ?
      _.remove(this.selecteds, { 'id': variable.id }) :
      this.selecteds.push(variable);
  }

  selectAll(){
    this.selecteds = _.clone(this.variables.items);
  }

  deleteAll() {
    this._deleteallmodal.open()
    .then(response => {
      if (response) this.selecteds = [];
    });
  }

  apply() {
    this._close(this.selecteds);
  }
  cancel() {
    if ( this._hasChange() ) {
      this._cancelmodal.open()
        .then(response => response && this._close(this._selecteds) );
    } else {
      this._close(this._selecteds);
    }
  }

  _hasChange() {
    return !_.isEqual(this._selecteds.length, this.selecteds.length);
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
