class UalFilterConditionController {
  /*@ngInject*/
  constructor() {
    this.name = 'ualFilterCondition';
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

  isValid() {
    let value = this.condition.valueText;
    let regex = '[a-zA-Z]+';//Hardcode, change with regex in this.variable.validation.regex
    let patt = new RegExp(regex);
    let hasError = patt.test(value);
    let response = {
      ReturnObject: { "Id": 1, "Value": "Input Value", "Type": "String" },
      HasError: hasError,
      Errors: [""]
    };
    return response.HasError;
  }

  getVariableName() {
    return !!this.condition && !!this.condition.selectedVariable ? "Invalid "+this.condition.selectedVariable.name+" format" : "Enter [variable name]";
  }

}

export default UalFilterConditionController;
