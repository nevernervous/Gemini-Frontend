//import 'selection-model';
class UalVariablesMultiSelectController {
  /*@ngInject*/
  constructor() {
    this.name = 'ualVariablesMultiSelect';
    this.filterName = {name: ""};
    this.ctrlDown = false;
    this.avaliableVariablesSelected=[];
  }

  selectAll () {
    // $(".-avaiable-variables option").prop("selected",null);
    // $(".-avaiable-variables option").prop("selected",true);
    this.avaliableVariablesSelected=this.variables;
    angular.forEach(this.avaliableVariablesSelected, function(value, key) {
      value.selected=true;
    } );
  }


  keyUp(event){
    //console.log(event);
    if ((event.which | event.keyCode) === 17) {
      this.ctrlDown = false;
    }
  }

  keyDown(event){
    //console.log(event);
    if ((event.which | event.keyCode) === 17) {
      this.ctrlDown = true;
      event.preventDefault();
    }
    if ((event.which | event.keyCode) === 65 && this.ctrlDown) {
      this.selectAll();
      event.preventDefault();
    }
  }
}

export default UalVariablesMultiSelectController;
