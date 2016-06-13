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

  toggle(){
    this.items.not = !this.items.not;
  }

  addChildren() {
    this.items.children.push({
      "variable": null,
      "operator": "=",
      "type": "Value",
      "value": null
    });
  }
  addGroup() {
    this.items.children.push({
      "not": false,
      "operator": {
        value: '&',
        text: 'AND'
      },
      "children": []
    });
  }
  cleanGroup(){
    this.items.children = [];
  }
  remove(id) {
    this.items.children.splice(id, 1);
  }
}

export default UalGroupFilterController;
