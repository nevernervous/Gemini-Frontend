import $ from 'jquery';
import myreports from './ualReportList._myreports.html';

class UalReportListController {
  /*@ngInject*/

  constructor(Report, $rootScope, ualReportListDeleteReportModal) {
    this._rootScope = $rootScope;

    this._services = {
      report: Report
    };

    this.reports = [];
    this.selectedReports = [];
    this.rows = [];
    this.total = 0;
    this.loading = true;
    this._deletereportmodal = ualReportListDeleteReportModal;

    this.orders = {
      'name': {
        attributes: [(item) => { return item.name.toLowerCase(); }],
        default: 'asc',
        direction: ['asc']
      },
      'dataSource': {
        attributes: ['dataSource', 'modificationDate'],
        default: 'asc',
        direction: ['asc', 'desc']
      },
      'modificationDate': {
        attributes: ['modificationDate'],
        default: 'desc',
        direction: ['desc']
      }
    }
    this.order = 'modificationDate';

    this.saveResultMessages = [
      { type: "-success", text: "Item(s) deleted successfully." },
      { type: "-error", text: "The item(s) was not deleted due to an unexpected error. Please try again or contact the Gemini administrator." }
    ];
  }

  orderBy(param) {
    let direction = this.orders[param].default;
    if ( this.order === param ) {
      direction = (this.orders[this.order].direction[0] === 'desc') ? 'asc' : 'desc';
    } else {
      this.orders[this.order].direction[0] = this.orders[this.order].default;
    }

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
    offset.top -= (window.isIE ? 47 : 44);
    offset.left -= (tooltip.outerWidth() / 2) - 3;
    tooltip.addClass("-show-tooltip");
    tooltip.css(offset);
  }

  onScroll() {
    this.hideTooltip();
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
        this.loading = false;
      }
    ).then(
      () => {
        this.loading = false;
      },
      (reason) => {
        this.loading = false;
        this.refresh();
      },
      (response) => {
        this.reports = this.reports.concat(response.data.data);
        this.refresh();
      }
    );
  }

  showTooltip(container, sibling, tooltipName, noValidate) {
    if (this.itemHasEllipsis(container, sibling) || noValidate) {
      let tooltip = $("#" + tooltipName);
      tooltip.prop("ual-tooltip-show", true);
    }
  }

  hideTooltip() {
    $("ual-tooltip").removeClass("-show-tooltip");
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

  reportDataSourceOffsetTop(id) {
    return window.isIE ? -3 : 7;
  }

  isSelected(reportId) {
    return _.some(this.selectedReports, { id: reportId });
  }

  toggleReport(reportId) {
    if (!_.some(this.selectedReports, { id: reportId })) {
      let selected = _.find(this.reports, { id: reportId });
      this.selectedReports.push(selected);
    } else {
      _.remove(this.selectedReports, { id: reportId });
    }
  }

  deleteSelected() {
    this._deletereportmodal.open()
      .then(response => {
        if (response) {
          let ids = _.map(this.selectedReports, 'id');
          let totalDelete = ids.length;
          this._services.report.remove(ids)
            .then((reply) => {
              _.remove(this.reports, (item) => {
                return _.contains(ids, item.id);
              });
              this.selectedReports = [];
              this.refresh();
              this.total -= totalDelete;
              // this._rootScope.$broadcast('BANNER.SHOW', this.saveResultMessages[0]);
            }, (reply) => {
              if (!reply.data || !reply.data.errorMessages) {
                this.saveResult = this.saveResultMessages[1];
              } else {
                this.saveResult = reply.data.errorMessage;
              }
              // this._rootScope.$broadcast('BANNER.SHOW', this.saveResultMessages[1]);
            })
            .catch(() => this._rootScope.$broadcast('BANNER.SHOW', this.saveResultMessages[1]));
        }
      });
  }

  deleteReport(reportId) {
    this._deletereportmodal.open()
      .then(response => {
        if (response) {
          this._services.report.remove([reportId])
            .then((reply) => {
              _.remove(this.reports, { id: reportId});
              _.remove(this.selectedReports, { id: reportId });
              this.refresh();
              this.total -= 1;
              // this._rootScope.$broadcast('BANNER.SHOW', this.saveResultMessages[0]);
            }, (reply) => {
              if (!reply.data || !reply.data.errorMessages) {
                this.saveResult = this.saveResultMessages[1];
              } else {
                this.saveResult = reply.data.errorMessage;
              }
              // this._rootScope.$broadcast('BANNER.SHOW', this.saveResultMessages[1]);
            })
            .catch(() => this._rootScope.$broadcast('BANNER.SHOW', this.saveResultMessages[1]));
        }
      });
  }

}

export default UalReportListController;

