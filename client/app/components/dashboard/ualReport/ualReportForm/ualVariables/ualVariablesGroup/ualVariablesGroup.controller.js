import $ from 'jquery';

class UalVariablesGroupController {
  /*@ngInject*/
  constructor(ualTooltipService) {
    this.open = false;
    this._ualTooltipService = ualTooltipService;
    this.callbackHideTooltip = this.hideTooltip.bind(this);
  }

  toggle() {
    if (this.groupEnabled) {
      this.open = !this.open;
    }
  }

  hideTooltip() {
    this._ualTooltipService.hide();
  }

}

export default UalVariablesGroupController;
