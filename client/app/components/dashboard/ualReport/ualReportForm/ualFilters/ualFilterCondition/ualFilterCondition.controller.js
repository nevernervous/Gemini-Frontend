class UalFilterConditionController {
  /*@ngInject*/
  constructor($scope, DataSource, $timeout) {
    this.name = 'ualFilterCondition';
    this.availableVariables;
    this._timeout = $timeout;
    this._datasourceService = DataSource;
    this.types = ["Value", "Variable"];
    this.operatorsList = ["=", "<", ">", "<>", "in"];

    $scope.$watch((scope) => {
      return scope.vm.datasource
    }, (newValue, oldValue) => {
      if (newValue !== oldValue && newValue) {
        this.getVariables();
      }
    });
  }

  trim($event) {
    this._timeout(() => {
      let $target = $($event.target);
      $target.val(_.trim($target.val()));
    });
  }

  getPlaceholder() {
    let result = "[variable name]";
    if (this.condition.variable) {
      result = this.condition.variable.dataType == 'Number' ? "numeric value" : this.condition.variable.name;
    }
    return result;
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

  reset() {
    this.condition.value = null;
  }

}

export default UalFilterConditionController;
