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
    this.variables = [];
    this.selecteds = _.clone(selecteds) || [];
    this.selectedGroups = [];
    this.allGroups = [];
    this.loading = true;
    this.allVariables = {};

    this._initialize();
  }

  isSelected(variable) {
    return (this.selecteds.indexOf(variable) > -1);
  }
  isSelectedGroup(groupId) {
    return (this.selectedGroups.indexOf(groupId) > -1);
  }
  toggle(variable) {
    let groupId = -1;

    if(typeof(variable["groupId"]) == "number")
    {
      //Es grupo
      groupId = variable.groupId;

      let indexGroup = this.selectedGroups.indexOf(groupId);
      (indexGroup > -1) ?
        this.selectedGroups.splice(indexGroup, 1) :
        this.selectedGroups.push(groupId);

      //Iterar las variables para quitar/agregar variables según el grupo
      this.allVariables[groupId].forEach( item => {
        let index = this.selecteds.indexOf(item);

        variable.selected = !(indexGroup > -1);

        if (indexGroup > -1){
          //Si ya existe el grupo, remover todos los elementos
          if (index > -1) this.selecteds.splice(index, 1);
        }
        else {
          //Si no existe el grupo, agregar todos los items
          if (index == -1) this.selecteds.push(item);
        }
      });
    }
    else
    {
      //Es variable
      groupId = variable.group.groupId;

      let index = this.selecteds.indexOf(variable);
      (index > -1) ?
        this.selecteds.splice(index, 1) :
        this.selecteds.push(variable);

      let groupedVariables = _(this.selecteds).groupBy("group.groupId").value();

      if (groupedVariables[groupId]){

        if (this.allVariables[variable.group.groupId].length == groupedVariables[groupId].length)
        {
          let indexGroup = this.selectedGroups.indexOf(groupId);
          if (indexGroup == -1) this.selectedGroups.push(groupId);

        }
        else{
          let indexGroup = this.selectedGroups.indexOf(variable.group.groupId);
          if (indexGroup > -1) this.selectedGroups.splice(indexGroup, 1)
        }

      }
      else{
        //si no hay elementos del grupo, quitar el grupo
        let indexGroup = this.selectedGroups.indexOf(groupId);
        if (indexGroup > -1) this.selectedGroups.splice(indexGroup, 1);
      }
    }

    //this.loading = (this.allGroups.length == this.selectedGroups.length);

  }

  selectAll(){
    this.loading = true;
    this.allGroups.forEach (item => {
      let index = this.selectedGroups.indexOf(item);
      if (index == -1) this.selectedGroups.push(item);
    });
    this.variables.forEach( item => {
      let index = this.selecteds.indexOf(item);
      if (index == -1) this.selecteds.push(item);
    });
  }
  deleteAll() {
    this._deleteallmodal.open()
      .then(response => {
        if (response) this.selecteds = [];
      });
  }
  getVariablesByGroup(groupId){
    let variablesByGroup = this.allVariables[groupId];
    return variablesByGroup;
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
    if ( this._selecteds.length === this.selecteds.length ) {
      let index = 0;
      for ( ; index < this._selecteds.length; index ++) {
        if ( this._selecteds[index].id !== this.selecteds[index].id ) {
          return true;
        }
      }
      return false;
    }
    return true;
  }

  _serialize(groups, index, promise) {
    index += 1;
    promise.then(variables => {
      this.variables = _.union(this.variables, variables.data);

      if (variables.data.length > 0){
        this.allVariables[groups[index-1].groupId] = variables.data;
      }

      if (index < groups.length) {
        this._serialize(groups, index,
          this._datasourceService.variables(this._datasource, groups[index]));
      }
      else {
        this.loading = false;
      }
    });
  }

  _initialize() {
    this._datasourceService.groups(this._datasource)
    .then(groups => {
      this._serialize(groups.data, -1, this._q.when({ data: [] }))
      this.allGroups = groups.data;
    });
  }
}

export default UalVariablesController;
