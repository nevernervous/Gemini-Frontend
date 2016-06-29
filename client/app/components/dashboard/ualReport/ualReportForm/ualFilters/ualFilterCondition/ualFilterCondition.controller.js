class UalFilterConditionController {
  /*@ngInject*/
  constructor($scope, DataSource, $timeout, $filter) {
    this.name = 'ualFilterCondition';
    this.availableVariables;
    this._timeout = $timeout;
    this._datasourceService = DataSource;
    this.types = ["Value", "Variable"];
    this.operatorsList = ["=", "<", ">", "<>", "in"];
    this._scope = $scope;

    this.filteredVariables = [];
    $scope.$watch((scope) => {
      return scope.vm.datasource
    }, (newValue, oldValue) => {
      if (newValue !== oldValue && newValue) {
        this.getVariables();
      }
    });

    this.secondVariablesFilter = {
      dataType: ""
    }
  }

  trim($event) {
    this._timeout(() => {
      let $target = $($event.target);
      let value = _.trim($target.val());
      $target.val(value);
      this.condition.value = value;
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
  variableChange(){
    console.log(this.secondVariablesFilter);
    console.log(this.condition.variable);
//    this.secondVariablesFilter.dataType= this.condition.variable.dataType;
  }

  resetSecond(){
    this.condition.type='Value';
    this.reset();
  }
  reset() {
    this._scope.filterConditionForm.$setPristine();
    this.condition.value = null;
  }

}

export default UalFilterConditionController;
