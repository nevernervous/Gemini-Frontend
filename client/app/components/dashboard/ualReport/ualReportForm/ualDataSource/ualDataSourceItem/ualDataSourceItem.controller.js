class UalDataSourceItemController {
  /*@ngInject*/
  constructor($filter) {
    this.name = 'ualDataSourceItem';
    this._filter = $filter;
  }

  showTooltip(container, data, position = 'right') {
    let hasEllipsis = $("#"+container).hasClass("is-truncated");
    // this._ualTooltipService.show({
    //   container: container,
    //   text: "<span class='title'>Last updated date " + this._filter('date')(data.refreshDate, 'MM/dd/yy HH:mm', '-0500') + " CT</span>" + (hasEllipsis ?  "<br />" + data.name : "") + "<br />" + data.description,
    //   position: position
    // });
  }

  hideTooltip() {
    //this._ualTooltipService.hide();
  }

}

export default UalDataSourceItemController;
