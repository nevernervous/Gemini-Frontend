class UalGroupFilterController {
  /*@ngInject*/
  constructor(ualRemoveGroupModal) {
    this.name = 'ualGroupFilter';
    this.andOperator = {
      "id": 1,
      "operator": "AND"
    };
    this.orOperator = {
      "id": 2,
      "operator": "OR"
    };

    this.operatorGroup = this.andOperator;
    this._ualRemoveGroupModal = ualRemoveGroupModal;


    this.selectedItem = this.andOperator;

    this.conditionList = [this.andOperator, this.orOperator];
  }

  toggle() {
    this.filters.not = !this.filters.not;
  }



  addChildren() {
    this.filters.children.push({
      "variable": null,
      "operator": { "id": 1, "operator": "=" },
      "type": "Value",
      "value": null,
      "secondValue": null
    });


  }
  addGroup() {
    this.filters.children.push({
      "not": false,
      "operator": this.andOperator,
      "children": []
    });
  }
  cleanGroup() {
    this.filters.children = [];
  }
  removeGroup(id) {
    this._ualRemoveGroupModal.open().then(
      response => {
        if (response) {
          this.filters.children.splice(id, 1);
        }
      }
    );
  }
  removeItem(id) {
    this.filters.children.splice(id, 1);
  }

  getGroupClass(){
    return {
      'not-group-and' : (this.filters.not && this.filters.operator.operator =='AND'),
      'not-group-or' : (this.filters.not && this.filters.operator.operator =='OR'),
      'empty' : this.filters.children.length == 0
    };
  }
}

export default UalGroupFilterController;
