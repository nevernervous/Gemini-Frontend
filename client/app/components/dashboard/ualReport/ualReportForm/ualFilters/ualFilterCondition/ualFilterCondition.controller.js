class UalFilterConditionController {
  /*@ngInject*/
  constructor($scope, DataSource, xRegExp, $timeout) {
    this.name = 'ualFilterCondition';
    this._regex = xRegExp;
    this._timeout = $timeout;

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

      //Non selected variable
      if (variable == undefined && this.isFirstFocus) {
        this.errorMessage = undefined;
        return;
      }

      //Empty value on Second Focus
      this.isFirstFocus = this.isFirstFocus == undefined ? true : false;
      let isEmpty = this.IsNullOrEmpty(value) && !this.isFirstFocus;

      if (isEmpty) {
        this.errorMessage = this.getNullValueError(variable);
        return;
      }

      //Invalid Format
      let regex = variable.regex || '[\´\'\"\\\%]';
      let pattern = this._regex(regex, 'i');

      let isInvalidFormat = false;
      if (value.indexOf(',') != -1) {
        let values = value.split(',');
        isInvalidFormat = _.reduce(values, (sum, item) => {
          return sum = sum || pattern.test(item);
        }, false);
      } else {
        isInvalidFormat = pattern.test(value);
      }

      if (isInvalidFormat) {
        this.errorMessage = this.getInvalidFormatError(variable);
        return;
      }

      this.errorMessage = undefined;
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
