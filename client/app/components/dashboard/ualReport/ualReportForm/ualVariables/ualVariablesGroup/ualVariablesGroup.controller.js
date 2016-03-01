class UalVariablesGroupController {
    /*@ngInject*/
    constructor(DataSource, $filter) {
        this.loading = false;
        this.isSelected = false;

        this._DataSource = DataSource;   //Servicios
        this._filter = $filter;

        this.allGroups = []; //All groups
        this._initialize();
    }

    toggle(){
        this.isSelected = !this.isSelected;
        console.log(this.isSelected);
    }

    getAllVariablesByGroup(datasourceId, groupId){
        this.loading = true;
        return this._DataSource.variables(datasourceId, groupId)
                   .then (response => {
                       this.allVariables[groupId] = response.data;
                   })
        .finally(() => {
            this.loading = false;
        });
    }

    _initialize() { 
        this._DataSource.groups(this.datasourceId)
               .then (response => {
                   let allgroups = response.data;

                   angular.forEach(allgroups, (value, key) =>
                   {         
                       this.getAllVariablesByGroup(this.datasourceId, value.groupId);
                   });

                   allgroups = this._filter('toArray')(allgroups, 'true');

                   this.allGroups = allgroups;

               });
    }
}

export default UalVariablesGroupController;
