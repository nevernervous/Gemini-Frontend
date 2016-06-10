class UalGroupFilterController {
  /*@ngInject*/
  constructor() {
    this.name = 'ualGroupFilter';

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
      "variable": "",
      "operator": "=",
      "comparing": "value",
      "value": ""
    })
  }
  addGroup() {
    this.items.children.push({
      "not": true,
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
  remove(item) {
    console.log(item);
    let i = this.items.children.indexOf(item);
    if (i >= 0) this.items.children.splice(i, 1);
  }
}

export default UalGroupFilterController;
