class UalGroupFilterController {
  /*@ngInject*/
  constructor() {
    this.name = 'ualGroupFilter';
    this.operatorGroup='AND';

    this.selectedItem = 'AND';

    this.conditionList = ['AND', 'OR'];
  }

  toggle(){
    this.filters.not = !this.filters.not;
  }

  addChildren() {
    this.filters.children.push({
      "variable": null,
      "operator": "=",
      "type": "Value",
      "value": null
    });


  }
  addGroup() {
    this.filters.children.push({
      "not": false,
      "operator": 'AND',
      "children": []
    });
  }
  cleanGroup(){
    this.filters.children = [];
  }
  remove(id) {
    this.filters.children.splice(id, 1);
  }
}

export default UalGroupFilterController;
