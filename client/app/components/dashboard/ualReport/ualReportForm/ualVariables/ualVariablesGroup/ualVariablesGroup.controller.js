class UalVariablesGroupController {
  /*@ngInject*/
  constructor() {
    this.selected = false;
  }

  toggle(){
    if (this.groupEnabled == true){
      this.selected = !this.selected;
    }
  }
}

export default UalVariablesGroupController;
