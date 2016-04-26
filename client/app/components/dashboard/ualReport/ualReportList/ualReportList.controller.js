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
          if (this.selectedReports.length == 1) {
            let report = _.head(this.selectedReports);
            this._reportService.remove(report.id)
              .then((reply) => {
                _.remove(this.reports, { id: report.id });
                this.selectedReports = [];
              });
          } else {
            //TODO: Delete Multiple Reports
          }
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
            });
        }
      });
  }

  showTooltip(e) {
    let datasource = $("#" + e.target.id);

    if (e.target.nodeName == 'UAL-DATA-SOURCE-ITEM') {
      let span = datasource.find("span:eq(0)");
      let offset = span.offset();
      let parentWidth = span.width();
      let childWidth = datasource.find("span:eq(1)").width();
      let tooltip = datasource.find("ual-tooltip");

      offset.left = (childWidth > parentWidth ? (parentWidth + 5) : (childWidth + 10)) + offset.left;
      offset.top -= ((tooltip.height() / 2) - ((span.height() / 2)));
      offset.top += window.isIE ? 2 : 5;

      tooltip.removeClass("-hide-tooltip").addClass("-show-tooltip");
      tooltip.css(offset);
    }
  }

  hideTooltip() {
    $(".-show-tooltip").removeClass("-show-tooltip").addClass("-hide-tooltip");
  }
}

export default UalReportListController;
