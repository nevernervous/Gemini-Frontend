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
    $(".-tooltip").removeClass("-show-tooltip");
    $("[ual-tooltip-show]").prop("ual-tooltip-show", false);
  }

}

export default UalVariablesGroupController;
