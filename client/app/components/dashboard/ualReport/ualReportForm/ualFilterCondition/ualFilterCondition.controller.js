class UalFilterConditionController {
  /*@ngInject*/
  constructor() {
    this.name = 'ualFilterCondition';
    this.isVariable=false;
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

    this.operators=[
      {text: "="}
    ]

    this.operator="AND";

  }
}

export default UalFilterConditionController;
