class UalVariablesGroupController {
  /*@ngInject*/
  constructor() {
    this.loading = false;
    this.selected = false;
  }

  toggle(){
    this.selected = !this.selected;
  }
}

export default UalVariablesGroupController;
