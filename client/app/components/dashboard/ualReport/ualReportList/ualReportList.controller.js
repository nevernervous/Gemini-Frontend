class UalReportListController {
  /*@ngInject*/

  constructor(Report) {
    this.reports = null;
    this._reportService = Report;

    this.predicate = 'lastModificationDate';
    this.reverse = true;
  }

  $onInit() {
    this._reportService.all()
      .then(response => this.reports = response.data);
  }

  showTooltipName(id){
    if (this.reportNameHasEllipsis(id)) {
      let tooltip = $("#tooltipName_"+id);
      tooltip.prop("ual-tooltip-show", true);
    }
  }

  showTooltipDataSource(id){
    let tooltip = $("#tooltipDataSource_"+id);
    tooltip.prop("ual-tooltip-show", true);
  }

  hideTooltip(){
    $(".-tooltip").removeClass("-show-tooltip");
    $("[ual-tooltip-show]").prop("ual-tooltip-show", false);
  }

  reportNameHasEllipsis(id){
    let container = $("#reportNameContainer_" + id);
    let sibling = $("#reportNameItem_" + id);
    return (window.isIE) ? ((sibling.outerWidth(true)+45) >= container.width()) : (sibling.width() > container.width());
  }

  reportNameContainer(id){
    return (this.reportNameHasEllipsis(id)) ? "reportNameContainer_" + id : "reportNameItem_" + id;
  }

  reportNameOffsetRight(id){
    return (this.reportNameHasEllipsis(id)) ? (window.isIE ? 10 : 4) : 15;
  }

  reportNameOffsetTop(id){
    return (this.reportNameHasEllipsis(id)) ? 0 : -3;
  }

  reportDataSourceHasEllipsis(id){
    let container = $("#reportDataSourceContainer_" + id);
    let sibling = $("#reportDataSourceItem_" + id);
    return (window.isIE) ? ((sibling.outerWidth(true)+45) >= container.width()) : (sibling.width() > container.width());
  }

  reportDataSourceContainer(id){
    return (this.reportDataSourceHasEllipsis(id)) ? "reportDataSourceContainer_" + id : "reportDataSourceItem_" + id;
  }

  reportDataSourceOffsetRight(id){
    return (this.reportDataSourceHasEllipsis(id)) ? (window.isIE ? 10 : 4) : 15;
  }

  reportDataSourceOffsetTop(id){
    return (this.reportDataSourceHasEllipsis(id)) ? 1 : -3;
  }
}

export default UalReportListController;
