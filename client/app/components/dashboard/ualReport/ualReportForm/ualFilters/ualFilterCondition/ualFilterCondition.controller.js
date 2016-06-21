class UalFilterConditionController {
  /*@ngInject*/
  constructor() {
    this.name = 'ualFilterCondition';
    this.types = ["Value","Variable"];
    this.operatorsList=["=","<",">","<>"];
  }

  reset(){
    this.condition.value=null;
  }

}

export default UalFilterConditionController;
