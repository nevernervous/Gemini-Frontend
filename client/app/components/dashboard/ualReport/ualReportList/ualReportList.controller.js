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
    let pageSize = 1,
    pageNumber = 1,
    sortColumn = 'lastModification',
    sortDirection = 'Desc';
    //this._services.report.query(pageSize, pageNumber, sortColumn, sortDirection)
    this._services.report.all()
      .then(response => {
        this.reports = response.data
        this.rows = _.map(this.reports, (item) => {
          return _.template(myreports)({item: item});
        });
      });
  }

  showTooltip(container, sibling, tooltipName, validate) {
    if (this.itemHasEllipsis(container, sibling) || validate) {
      let tooltip = $("#" + tooltipName);
      tooltip.prop("ual-tooltip-show", true);
    }
  }

  hideTooltip() {
    $(".-tooltip").removeClass("-show-tooltip");
    $("[ual-tooltip-show]").prop("ual-tooltip-show", false);
  }

  itemHasEllipsis(container, sibling) {
    let _container = $("#" + container);
    let _sibling = $("#" + sibling);
    return (window.isIE) ? ((_sibling.outerWidth(true) + 45) >= _container.width()) : (_sibling.width() > _container.width());
  }

  tooltipContainer(container, sibling) {
    return (this.itemHasEllipsis(container, sibling)) ? container : sibling;
  }

  tooltipOffsetRight(container, sibling) {
    return (this.itemHasEllipsis(container, sibling)) ? (window.isIE ? -20 : -30) : 15;
  }

  tooltipOffsetLeft() {
    return window.isIE ? 15 : -15;
  }

}

export default UalReportListController;

