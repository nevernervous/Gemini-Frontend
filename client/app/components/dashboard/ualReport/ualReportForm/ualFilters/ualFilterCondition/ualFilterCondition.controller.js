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
    let response = {
      ReturnObject: { "Id": 1, "Value": "Input Value", "Type": "String" },
      HasError: false,
      Errors: [""]
    };
    return response.HasError;
  }

  getVariableName() {
    return !!this.condition && !!this.condition.selectedVariable ? this.condition.selectedVariable.name : "[variable name]";
  }

}

export default UalFilterConditionController;
