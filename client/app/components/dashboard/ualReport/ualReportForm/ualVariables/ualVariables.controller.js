class UalVariablesController {
  /*@ngInject*/
  constructor(close, $q, DataSourceService, ualVariablesDeteleAllModal, datasource, selecteds) {
    // SERVICES
    this._close = close;
    this._datasourceService = DataSourceService;
    this._deleteallmodal = ualVariablesDeteleAllModal;
    this._q = $q;

    // VARS / PRIVATE
    this._datasource = datasource;
    this._selecteds = selecteds;

    // VARS / PUBLIC
    this.variables = [];
    this.selecteds = selecteds || [];

    this._initialize();
  }

  isSelected(variable) {
    return (this.selecteds.indexOf(variable) > -1);
  }
  toggle(variable) {
    let index = this.selecteds.indexOf(variable);
    (index > -1) ?
      this.selecteds.splice(index, 1) :
      this.selecteds.push(variable);
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
    this._close(this._selecteds);
  }

  _serialize(groups, index, promise) {
    index += 1;
    promise.then(variables => {
      this.variables = _.union(this.variables, variables.data);
      if (index < groups.length) {
        this._serialize(groups, index,
          this._datasourceService.variables(this._datasource, groups[index]));
      }
    });
  }

  _initialize() {
    this._datasourceService.groups(this._datasource)
      .then(groups => this._serialize(groups.data, -1, this._q.when({ data: [] })));
  }
}

export default UalVariablesController;
