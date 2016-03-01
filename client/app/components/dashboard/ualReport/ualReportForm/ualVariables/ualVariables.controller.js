class UalVariablesController {
  /*@ngInject*/
  constructor(close, $q, DataSourceService, ualVariablesDeteleAllModal, datasource, selecteds, $filter) {
    // SERVICES
    this._close = close;
    this._datasourceService = DataSourceService;
    this._deleteallmodal = ualVariablesDeteleAllModal;
    this._q = $q;
    this._filter = $filter;

    // VARS / PRIVATE
    this._datasource = datasource;
    this._selecteds = selecteds;

    // VARS / PUBLIC
    this.variables = [];
    this.selecteds = selecteds || [];
    this.datasourceId = datasource.id;
    this.allGroups = []; //All groups
    this.allVariables = {};

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

  selectAll(){
    this.variables.forEach( item => {
      let index = this.selecteds.indexOf(item.id);
      if (index == -1){
        this.selecteds.push(item.id);
      }
    });
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

  getVariablesByGroup(groupId){
    let variablesByGroup = this.allVariables[groupId];
    return variablesByGroup;
  }

  _serialize(groups, index, promise) {
    index += 1;
    promise.then(variables => {
      this.variables = _.union(this.variables, variables.data);

      //let vars = this._filter('toArray')(variables.data, 'true');

      this.allVariables[index] = variables.data;

      if (index < groups.length) {
        this.allGroups.push(groups[index]);
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
