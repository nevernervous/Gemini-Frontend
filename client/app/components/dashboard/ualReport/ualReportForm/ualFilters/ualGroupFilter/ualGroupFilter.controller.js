class UalGroupFilterController {
  /*@ngInject*/
  constructor(ualRemoveGroupModal) {
    this.name = 'ualGroupFilter';
    this.operatorGroup='AND';
    this._ualRemoveGroupModal=ualRemoveGroupModal;

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
  removeGroup(id) {
    this._ualRemoveGroupModal.open().then(
      response => {
        if(response) {
          this.filters.children.splice(id, 1);
        }
      }
    );
  }
  removeItem(id){
   this.filters.children.splice(id, 1);
  }
}

export default UalGroupFilterController;
