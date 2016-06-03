class UalGroupFilterController {
  /*@ngInject*/
  constructor() {
    this.name = 'ualGroupFilter';

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
