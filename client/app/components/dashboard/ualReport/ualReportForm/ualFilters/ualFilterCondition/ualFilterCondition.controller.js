class UalFilterConditionController {
  /*@ngInject*/
  constructor($scope, DataSource, $timeout, Validator) {
    this.name = 'ualFilterCondition';
    this._timeout = $timeout;
    this.isFirstFocus = null;

    this._validator = Validator;
    this.availableVariables;
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

  $onInit() {
    this.getVariables();
  }


  valid() {
    this._timeout(() => {
      let value = this.condition.value;
      let variable = !!this.condition && !_.isEmpty(this.condition.variable) ? this.condition.variable : null;
      let operator = this.condition.operator;
      let errorMessage = null;

      //Non selected variable
      if (!variable && !!this.isFirstFocus) {
        this.errorMessage = null;
        return;
      }

      this.isFirstFocus = this.isFirstFocus == null ? true : false;
      this.variableName = variable.name;

      let validation = this._validator.isValid(value, variable);
      if (!validation.isValid && !this.isFirstFocus) {
        this.errorMessage = validation.message;
      } else {
        this.errorMessage = null;
      }
    }, 0)

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
