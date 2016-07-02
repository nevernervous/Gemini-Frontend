import myreports from './ualReportList.Mine.html';

class UalReportListController {
  /*@ngInject*/
  constructor(
    $rootScope,
    $timeout,
    ualDialog,
    errorsHandler,
    Report) {
    this.name = 'ualReportList';

    // INTERNALS
    this.$rootScope = $rootScope;
    this.$timeout = $timeout;

    // SERVICES
    this.services = {
      report: Report,
      error: errorsHandler
    };

    // COMPONENTS
    this.components = {
      dialog: ualDialog
    }

    // PRIVATE
    this.reports = [];
    this.selectedReports = [];
    this.rows = [];
    this.total = 0;
    this.loading = true;

    this.order = 'modificationDate';
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
  }

  $onInit() {
    // TODO: DO NOT LOAD ALL INFORMATION
    // LOAD REPORTS
    this.loading = true;
    this.services.report.pages('modificationDate', 'desc')
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
  showMore(element, tooltip) {
    const is_truncated = $(element).width() < $(element + ' a').width();
    // wait until tooltip was rendered
    this.$timeout(
      () => is_truncated && $(tooltip).removeClass('ual-tooltip-hide'),
      100
    )
  }

  // SELECT
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

  // ORDER
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
    const _order = this.orders[this.order];
    const _reports = _.sortByOrder(this.reports, _order.attributes, _order.direction);
    this.rows = _.map(_reports, (item) => {
      return _.template(myreports)({ item: item });
    });
  }

  // DELETE
  deleteReport(id, ev) {
    this.delete([id], ev);
  }
  deleteSelected(ev) {
    this.delete(_.map(this.selectedReports, 'id'));
  }
  delete(ids, ev) {
    const totalDelete = ids.length;
    const options = {
      target: ev
    };

    this.components.dialog.confirm(
      'Delete report',
      'Delete the selected item(s)?',
      options)
    .then(() => {
      this.services.report.remove(ids)
      .then((reply) => {
        _.remove(this.selectedReports, (item) => {
          return _.contains(ids, item.id);
        });
        _.remove(this.reports, (item) => {
          return _.contains(ids, item.id);
        });
        this.refresh();
        this.total -= totalDelete;

        const banner = { type: "success", text: "Item(s) deleted successfully." }
        this.$rootScope.$broadcast('BANNER.SHOW', banner);
      }, (reply) => {
        this.services.error.handle(reply);
        // const banner = { type: "error", text: "The item(s) was not deleted due to an unexpected error. Please try again or contact the Gemini administrator." };
        // this.$rootScope.$broadcast('BANNER.SHOW', banner);
      });

    });
  }

}

export default UalReportListController;
