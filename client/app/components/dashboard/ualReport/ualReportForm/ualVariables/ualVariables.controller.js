class UalVariablesController {
    /*@ngInject*/
    constructor(close, datasource, selecteds, DataSource, $filter) {
        this._close = close;
        this._datasource = datasource;   //CurrentDataSourceSelected   
        this._DataSource = DataSource;   //Servicios
        this._filter = $filter;

        this.selecteds = selecteds || []; 
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
  
    apply() {
        this._close(this.selecteds);  
    }
    cancel() {
        this._close(this._selecteds);
    }

    getVariablesByGroup(groupId){
        //TODO: Lo hace muchas veces
        console.log("groupby:")
        console.log(this.allVariables);
        return this.allVariables[groupId];
    }

    getAllVariablesByGroup(datasourceId, groupId){
        return this._DataSource.variables(datasourceId, groupId)
                   .then (response => {
                       this.allVariables[groupId] = response.data;
                   });
    }
  
    _initialize() { 
        let datasourceId = this._datasource.id;

        this._DataSource.groups(this._datasource.id)
               .then (response => {
                   let allgroups = response.data;

                   angular.forEach(allgroups, (value, key) =>
                   {         
                       this.getAllVariablesByGroup(datasourceId, value.groupId);
                   });

                   allgroups = this._filter('toArray')(allgroups, 'true');
                   this.allGroups = allgroups;

               });
    }
}

export default UalVariablesController;
