class UalFilterConditionController {
  /*@ngInject*/
  constructor(xRegExp, $timeout) {
    this.name = 'ualFilterCondition';
    this._regex = xRegExp;
    this._timeout = $timeout;
    this.valueVariable = [
      {
        value: false,
        text: "Value"
      },
      {
        value: true,
        text: "Variable"
      }
    ];
  }

  IsNullOrEmpty(value) {
    if (typeof (value) === 'undefined' || value === null)
      return true;
    if (value === "")
      return true;
    return false;
  }

  valid() {
    this._timeout(() => {
      let value = this.condition.valueText;
      let variable = !!this.condition && !_.isEmpty(this.condition.selectedVariable) ? this.condition.selectedVariable : undefined;

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
      let isInvalidFormat = pattern.test(value);

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

}

export default UalFilterConditionController;
