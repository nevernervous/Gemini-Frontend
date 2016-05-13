class UalVariablesLayoutController {
  /*@ngInject*/
  constructor(ualTooltipService) {
    this.name = 'ualVariablesLayout';
    this._ualTooltipService = ualTooltipService;
  }

  showTooltip(container, description, position = 'top') {
    this._ualTooltipService.show({
      container: container,
      text: description,
      position: position
    });
  }

  hideTooltip() {
    this._ualTooltipService.hide();
  }
}

export default UalVariablesLayoutController;
