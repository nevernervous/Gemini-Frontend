import $ from 'jquery';
import myreports from './ualReportList._myreports.html';

class UalReportListController {
  /*@ngInject*/
  constructor(Report, $rootScope, ualReportListDeleteReportModal, ualTooltipService, $filter) {
    this.name = 'ualReportList';
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
    this._ualTooltipService = ualTooltipService;
    this._filer = $filter;

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

    this.tooltips = {
      'simple': (data) => {
        return data.text;
      },
      'lastupdated': (data) => {
        return 'Last updated ' + $filter('date')(data.text, 'MM/dd/yy HH:mm', '-0500') + ' CT';
      }
    }

    this.saveResultMessages = [
      { type: "success", text: "Item(s) deleted successfully." },
      { type: "error", text: "The item(s) was not deleted due to an unexpected error. Please try again or contact the Gemini administrator." }
    ];
  }

  orderBy(param) {
    let direction = this.orders[param].default;
    if (this.order === param) {
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

  $onInit() {
    // LOAD REPORTS
    this.loading = true;
    this._services.report.pages('modificationDate', 'desc')
    .then(
      done => {
        this.loading = false;
      },
      reason => {
        this.loading = false;
      },
      progress => {
        this.reports = this.reports.concat(progress.data.data);
        this.total = progress.data.totalCount;
        this.refresh();
      }
    );
  }

  // TOOLTIP
  showTooltip(container, data, type = 'simple', position = 'right') {
    let content = this.tooltips[type](data);
    this._ualTooltipService.show({
      container: container,
      text: content,
      position: position
    });
  }
  showTruncateTooltip(container, text, type = 'simple', position = 'right') {
    $("#"+container).hasClass('is-truncated') && this.showTooltip(container, text, type, position);
  }

  hideTooltip() {
    this._ualTooltipService.hide();
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
            }, (reply) => this.showError(reply))
            .catch(() => this._rootScope.$broadcast('BANNER.SHOW', this.saveResultMessages[1]));
        }
      });
  }
}

export default UalReportListController;
