import $ from 'jquery';

class UalVariablesGroupController {
  /*@ngInject*/
  constructor() {
    this.open = false;
  }

  toggle() {
    if (this.groupEnabled) {
      this.open = !this.open;
    }
  }  
  
  hideTooltip(){
    $(".-active").css("display", "none");
    $(".-active").removeClass("-active");
  }

}

export default UalVariablesGroupController;
