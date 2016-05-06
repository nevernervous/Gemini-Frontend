import $ from 'jquery';
import myreports from './ualReportList._myreports.html';

class UalReportListController {
  /*@ngInject*/

  constructor(Report, $rootScope, ualReportListDeleteReportModal, ualTooltipService,$filter) {
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
    this._ualTooltipService=ualTooltipService;
    this._filer=$filter;


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

    this.saveResultMessages = [
      { type: "-success", text: "Item(s) deleted successfully." },
      { type: "-error", text: "The item(s) was not deleted due to an unexpected error. Please try again or contact the Gemini administrator." }
    ];
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

  tooltip(container) {
    // let tooltip = $(id + ' ual-tooltip');
    // let offset = $(id).offset();
    // offset.position = 'fixed';
    // offset.top -= (window.isIE ? 47 : 44);
    // offset.left -= (tooltip.outerWidth() / 2) - 3;
    // tooltip.css(offset);
    this._ualTooltipService.show({
        container : container,
        text: "Delete",
        position:"top"
      });
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

  showTooltip(container, sibling, validate, text) {
     if (this.itemHasEllipsis(container, sibling) || validate) {
      //  let tooltip = $("#" + tooltipName);
      //  tooltip.prop("ual-tooltip-show", true);
      text=this._filer('date')(text, "MM/dd/yy HH:mm CT");
       this._ualTooltipService.show({
        container : this.itemHasEllipsis(container, sibling)?container:sibling,
        text: text,
        position:"right"
      });

     }

  }

  hideTooltip() {
    // $("ual-tooltip").removeClass("-show-tooltip");
    // $("[ual-tooltip-show]").prop("ual-tooltip-show", false);
    this._ualTooltipService.hide();
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

  showError(reply) {
    if (!reply.data || !reply.data.errorMessages) {
      this.saveResult = this.saveResultMessages[1];
    } else {
      this.saveResult = reply.data.errorMessage;
    }
    // this._rootScope.$broadcast('BANNER.SHOW', this.saveResultMessages[1]);
  }

  deleteReport(id) {
    this.delete([id]);
  }
  deleteSelected() {
    this.delete(_.map(this.selectedReports, 'id'));
  }

  delete(ids) {
    let totalDelete = ids.length;
    this._deletereportmodal.open()
      .then((response) => {
        if (response) {
          this._services.report.remove(ids)
              .then((reply) => {
                _.remove(this.selectedReports, (item) => {
                  return _.contains(ids, item.id);
                });
                _.remove(this.reports, (item) => {
                  return _.contains(ids, item.id);
                });
                this.refresh();
                this.total -= totalDelete;
                // this._rootScope.$broadcast('BANNER.SHOW', this.saveResultMessages[0]);
              }, (reply) => this.showError(reply))
              .catch(() => this._rootScope.$broadcast('BANNER.SHOW', this.saveResultMessages[1]));
        }
      });
  }

}

export default UalReportListController;

