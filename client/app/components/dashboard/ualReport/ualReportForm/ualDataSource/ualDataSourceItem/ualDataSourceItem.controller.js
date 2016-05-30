class UalDataSourceItemController {
  /*@ngInject*/
  constructor(ualTooltipService, $filter) {
    this._ualTooltipService = ualTooltipService;
    this._filter = $filter;
  }

  showTooltip(container, data, position = 'right') {
    let hasEllipsis = $("#"+container).hasClass("is-truncated");
    this._ualTooltipService.show({
      container: container,
      text: "<strong>Last updated date " + this._filter('date')(data.refreshDate, 'MM/dd/yy HH:mm', '-0500') + " CT</strong>" + (hasEllipsis ?  "<br />" + data.name : "") + "<br />" + data.description,
      position: position
    });
  }

  hideTooltip() {
    this._ualTooltipService.hide();
  }

}

export default UalDataSourceItemController;
