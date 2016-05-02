import $ from 'jquery';
import myreports from './ualReportList._myreports.html';

class UalReportListController {
  /*@ngInject*/

  constructor(Report) {

    this._services = {
      report: Report
    };

    this.reports = [];
    this.rows = [];

    //this.predicate = 'lastModificationDate';
    //this.reverse = true;
  }

  order(param) {
    // let rows = [];
    // for (var i = 50; i > 0; i--) {
    //   rows.push('<tr><td ng-click="vm.clickme(' + i + ')">' + i + '</td></tr>');
    // }
    // console.log("REORDER: " + param);
    // this.rows = rows;
  }

  tooltip(id) {
    let tooltip = $(id + ' ual-tooltip');
    let offset = $(id).offset();
    offset.position = 'fixed';
    offset.top -= 25;
    offset.left -= (tooltip.outerWidth() / 2);
    tooltip.css(offset);
  }

  $onInit() {
    this._services.report.all()
      .then(response => {
        this.reports = response.data
        this.rows = _.map(this.reports, (item) => {
          return _.template(myreports)({item: item});
        });
      });
  }

  showTooltipName(id) {
    if (this.reportNameHasEllipsis(id)) {
      let tooltip = $("#tooltipName_" + id);
      tooltip.prop("ual-tooltip-show", true);
    }
  }

  showTooltipDataSource(id) {
    let tooltip = $("#tooltipDataSource_" + id);
    tooltip.prop("ual-tooltip-show", true);
  }

  hideTooltip() {
    $(".-tooltip").removeClass("-show-tooltip");
    $("[ual-tooltip-show]").prop("ual-tooltip-show", false);
  }

  reportNameHasEllipsis(id) {
    let container = $("#reportNameContainer_" + id);
    let sibling = $("#reportNameItem_" + id);
    return (window.isIE) ? ((sibling.outerWidth(true) + 45) >= container.width()) : (sibling.width() > container.width());
  }

  reportNameContainer(id) {
    return (this.reportNameHasEllipsis(id)) ? "reportNameContainer_" + id : "reportNameItem_" + id;
  }

  reportNameOffsetRight(id) {
    return (this.reportNameHasEllipsis(id)) ? (window.isIE ? 10 : 4) : 15;
  }

  reportNameOffsetTop(id) {
    return (this.reportNameHasEllipsis(id)) ? 0 : -3;
  }

  reportDataSourceHasEllipsis(id) {
    let container = $("#reportDataSourceContainer_" + id);
    let sibling = $("#reportDataSourceItem_" + id);
    return (window.isIE) ? ((sibling.outerWidth(true) + 45) >= container.width()) : (sibling.width() > container.width());
  }

  reportDataSourceContainer(id) {
    return (this.reportDataSourceHasEllipsis(id)) ? "reportDataSourceContainer_" + id : "reportDataSourceItem_" + id;
  }

  reportDataSourceOffsetRight(id) {
    return (this.reportDataSourceHasEllipsis(id)) ? (window.isIE ? 10 : 4) : 15;
  }

  reportDataSourceOffsetTop(id) {
    return (this.reportDataSourceHasEllipsis(id)) ? 1 : -3;
  }
}

export default UalReportListController;

