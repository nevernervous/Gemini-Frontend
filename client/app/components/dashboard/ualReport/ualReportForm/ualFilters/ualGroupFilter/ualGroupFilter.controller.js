class UalGroupFilterController {
  /*@ngInject*/
  constructor(ualRemoveGroupModal, ualResetGroupModal) {
    this.name = 'ualGroupFilter';
    this.operatorGroup='AND';
    this._ualRemoveGroupModal=ualRemoveGroupModal;
    this._ualResetGroupModal=ualResetGroupModal;

    this.selectedItem = 'AND';

    this.conditionList = ['AND', 'OR'];



    this.resetDown = function resetDown(group){
      let resetAllExceptions = ["Is Null","Is Not Null","Is Blank","Is Not Blank"];
      _.forEach(group.children,function(element){
        if(!element.children){
          element.type = "Value";
          element.value = null;
          //element.secondValue = null;
          if(resetAllExceptions.indexOf(element.operator)<0){
            element.operator = "=";
            element.variable = null;
          }
        }else{
          resetDown(element);
        }
      });
    }
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
  resetAll(){
    this._ualRemoveGroupModal.open()
      .then(
        response => {
          if(response) {
            this.resetDown(this.filters);
          }
        }
      );
  }
  removeItem(id){
   this.filters.children.splice(id, 1);
  }
}

export default UalGroupFilterController;
