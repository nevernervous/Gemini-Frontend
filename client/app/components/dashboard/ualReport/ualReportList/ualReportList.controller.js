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
    this.total = 0;
    this.loading = true;

    this.orders = {
      'name': {
        attributes: ['name'],
        direction: ['desc']
      },
      'dataSource': {
        attributes: ['dataSource', 'modificationDate'],
        direction: ['desc', 'desc']
      },
      'modificationDate': {
        attributes: ['modificationDate'],
        direction: ['desc']
      }
    }
    this.order = 'modificationDate';
  }

  orderBy(param) {
    // IF IS THE SAME && IS 'DESC', SO CHANGE TO 'ASC'. ELSE, USE 'DESC'
    let direction = (this.order === param && (this.orders[this.order].direction[0] === 'desc')) ? 'asc' : 'desc';
    this.order = param;
    this.orders[this.order].direction[0] = direction;

    this.refresh();
  }
  refresh() {
    let _order = this.orders[this.order];
    let _reports = _.sortByOrder(this.reports, _order.attributes, _order.direction);
    this.rows = _.map(_reports, (item) => {
      return _.template(myreports)({ item: item });
    });
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
    // LOAD REPORTS
    this.loading = true;
    let _order = this.orders[this.order];
    // LOAD REPORTS / FIRST PAGE
    this._services.report.first('modificationDate', 'desc').then(
      response => {
        this.reports = response.data.data;
        this.total = response.data.totalCount;
        this.refresh();

        // LOAD REPORTS / NEXT PAGES
        return this._services.report.all(2, this.total, 'modificationDate', 'desc');
      },
      reason => {
        console.log('error');
        this.loading = false;
      }
    ).then(
      () => {
        this.loading = false;
      },
      (reason) => {
        console.log('error');
        this.loading = false;
        this.refresh();
      },
      (response) => {
        this.reports = this.reports.concat(response.data.data);
        this.refresh();
      }
    );
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

