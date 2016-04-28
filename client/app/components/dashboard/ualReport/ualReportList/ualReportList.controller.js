class UalReportListController {
  /*@ngInject*/
  constructor(Report, $rootScope, ualReportListDeleteReportModal) {
    this._rootScope = $rootScope;
    this.reports = [];
    this.selectedReports = [];
    this._reportService = Report;
    this._deletereportmodal = ualReportListDeleteReportModal;

    this.predicate = 'lastModificationDate';
    this.reverse = true;
  }

  $onInit() {
    this._suscriptions = [];
    this._suscriptions.push(this._rootScope.$on('SESSION.LOGOUT', () => this._closemodal(true)));
    this._suscriptions.push(this._rootScope.$on('SESSION.EXPIRED', () => this._closemodal(true)));

    this._reportService.all()
      .then(response => this.reports = response.data);
  }

  _closemodal(response) {
    this._suscriptions.forEach(suscription => suscription());
    this._close(response);
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
          this._reportService.remove(ids)
            .then((reply) => {
              _.remove(this.reports, (item) => {
                return _.contains(ids, item.id);
              });
              this.selectedReports = [];
            }, (reply) => {
              debugger;
              alert(reply.statusText);
            });
        }
      });
  }

  deleteReport(report) {
    this._deletereportmodal.open()
      .then(response => {
        if (response) {
          this._reportService.remove(report.id)
            .then((reply) => {
              _.remove(this.reports, { id: report.id });
              _.remove(this.selectedReports, { id: report.id });
            });
        }
      });
  }
}

export default UalReportListController;
