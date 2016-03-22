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
    $(".-show-tooltip").removeClass("-show-tooltip").addClass("-hide-tooltip");
  }

}

export default UalVariablesGroupController;
