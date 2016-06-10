class UalGroupFilterController {
  /*@ngInject*/
  constructor() {
    this.name = 'ualGroupFilter';
    this.operatorGroup={
        value: '&',
        text: 'AND'
      };

    this.selectedItem = {
      value: '&',
      text: 'AND'
    };

    this.conditionList = [
      {
        value: '&',
        text: 'AND'
      },
      {
        value: '|',
        text: 'OR'
      }
    ];
  }

  addCondition() {
    this.collection.push({
      variable:null,
      operator : "=",
      type:"Value",
      value:null
    });
  }

  removeCondition(id){
    this.collection.splice(id,1);
  }
  removeAll(){
    this.collection=[];
  }
}

export default UalGroupFilterController;
