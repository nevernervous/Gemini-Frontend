class UalFilterConditionController {
  /*@ngInject*/
  constructor($scope, DataSource) {
    this.name = 'ualFilterCondition';
    this.availableVariables;
    this._datasourceService = DataSource;
    this.types = ["Value","Variable"];
    this.operatorsList=["=","<",">","<>"];

    $scope.$watch((scope) => {
      return scope.vm.datasource
    }, (newValue, oldValue) => {
      if (newValue !== oldValue && newValue) {
        this.getVariables();
      }
    });

  }

  $onInit() {
    this.getVariables();
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

  reset(){
    this.condition.value=null;
  }

}

export default UalFilterConditionController;
