class UalFilterConditionController {
  /*@ngInject*/
  constructor($scope, DataSource) {
    this.name = 'ualFilterCondition';
    this.availableVariables;
    this._datasourceService = DataSource;
    this.valueVariable = [
      {
        value:false,
        text: "Value"
      },
      {
        value:true,
        text: "Variable"
      }
    ];
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

}

export default UalFilterConditionController;
