class UalFilterConditionController {
  /*@ngInject*/
  constructor($scope, DataSource, $timeout, Validator) {
    this.name = 'ualFilterCondition';
    this._timeout = $timeout;

    this._validator = Validator;
    this.availableVariables;
    this._datasourceService = DataSource;
    this.types = ["Value", "Variable"];
    this.operatorsList = ["=", "<", ">", "<>"];

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
      let variable = !!this.condition && !_.isEmpty(this.condition.variable) ? this.condition.variable : undefined;
      let errorMessage = undefined;


      //Non selected variable
      if (variable == undefined && this.isFirstFocus) {
        this.errorMessage = undefined;
        return;
      }

      //Empty value on Second Focus
      this.isFirstFocus = this.isFirstFocus == undefined ? true : false;

      let options = {
        required: true,
        regex: {
          pattern: variable.RegEx || '^-?[0-9]\d*(\.\d+)?$',
          denyPattern: true,
          flags: 'i'
        }
      }

      let validation = this._validator.isValid(value, variable.DataType || "number", options);

      if (!validation.isValid && !this.isFirstFocus) {
        this.errorMessage = validation.getMessage(variable.name);
      }
    }, 0)

  }

  getNullValueError(variable) {
    let variableName = !_.isEmpty(variable) ? variable.name : "[variable name]";
    return "Enter " + variableName;
  }
  getInvalidFormatError(variable) {
    return "Invalid " + variable.name + " format";
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
