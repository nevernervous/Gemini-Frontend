class UalDataSourceItemController {
  /*@ngInject*/
  constructor(ualTooltipService) {
    this._ualTooltipService = ualTooltipService;
  }

  showTooltip(container, data, position = 'right') {
    let hasEllipsis = $("#"+container).hasClass("is-truncated");
    this._ualTooltipService.show({
      container: container,
      text: "<strong>Last updated date " + data.dataSourceRefreshDate + "</strong>" + (hasEllipsis ?  "<br />" + data.name : "") + "<br />" + data.description,
      position: position
    });
  }

  hideTooltip() {
    this._ualTooltipService.hide();
  }

}

export default UalDataSourceItemController;
