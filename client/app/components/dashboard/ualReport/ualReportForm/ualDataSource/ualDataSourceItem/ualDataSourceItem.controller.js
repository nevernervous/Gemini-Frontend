class UalDataSourceItemController {
  /*@ngInject*/
  constructor(ualTooltipService) {
    this.name = 'ualDataSourceItem';
    this._ualTooltipService = ualTooltipService;
  }

  showTooltip(container, data, position = 'right') {
    this._ualTooltipService.show({
      container: container,
      text: data.description,
      position: position
    });
  }

  hideTooltip() {
    this._ualTooltipService.hide();
  }

}

export default UalDataSourceItemController;
