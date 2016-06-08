class UalConditionsGroupController {
  /*@ngInject*/
  constructor() {
    this.name = 'ualConditionsGroup';
  }
  addChildren() {
    this.items.children.push({
      "variable": ""
      , "operator": "="
      , "comparing": "value"
      , "value": ""
    })
  }
  addGroup() {
    this.items.children.push({
      "not": true,
      "operator": "and",
      "children": []
    });
  }
  remove(item){
    let i = this.items.children.indexOf(item);
    if (i >= 0) this.items.children.splice(i, 1);
  }
}

export default UalConditionsGroupController;
