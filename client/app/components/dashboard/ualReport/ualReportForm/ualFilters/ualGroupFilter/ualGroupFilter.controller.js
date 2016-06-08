class UalGroupFilterController {
  /*@ngInject*/
  constructor() {
    this.name = 'ualGroupFilter';
    this.operatorGroup={
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
}

export default UalGroupFilterController;
