class UalFiltersController {
  /*@ngInject*/
  constructor($scope, DataSource) {
    this.name = 'ualFilters';
    this.conditions = [];
    this._datasourceService = DataSource;
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
    this.conditions.push({});
  }
}

export default UalFiltersController;
