class UalFiltersController {
  /*@ngInject*/
  constructor($scope, DataSource) {
    this.name = 'ualFilters';
    this.collection = [];
    this._datasourceService = DataSource;
    this.availableVariables=[];
    this.operatorsList=[
      {text: "="},
      {text: "<"},
      {text: ">"},
      {text: "<>"}
    ];

    $scope.$watch((scope) => {
      return scope.vm.datasource
    }, (newValue, oldValue) => {
      if (newValue !== oldValue && newValue) {
        this.getVariables();
        this.collection=[];
      }
    });
  }

  getVariables() {
    this._datasourceService.variables(this.datasource)
      .then(response => {
        this.availableVariables = response.data;
      },
      error => {
        this.availableVariables = [];
      });
  }

  addCondition() {
    this.collection.push({
      selectedOperator : {text: "="},
      isVariable:{
         value:true,
         text: "Variable"
      }
    });
  }

  removeCondition(id){
    this.collection.splice(id,1);
  }
}

export default UalFiltersController;
