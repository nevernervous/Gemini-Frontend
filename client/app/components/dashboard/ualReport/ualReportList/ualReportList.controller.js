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

    this.saveResult = null;

    this.saveResultMessages = [
      { type: "-success", text: "Item(s) deleted successfully." },
      { type: "-error", text: "The item(s) was not deleted due to an unexpected error. Please try again or contact the Gemini administrator." }
    ];
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
    return (this.reportNameHasEllipsis(id)) ? 7 : -3;
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
    return window.isIE ? -3 : 7;
  }


  onErrorResponse(reply) {
    if (!reply.data || !reply.data.errorMessages) {
      this.saveResult = this.saveResultMessages[1];
    } else {
      this.saveResult = reply.data.errorMessage;
    }
    this._rootScope.$broadcast('BANNER.SHOW', { type: "-error", text: this.saveResult });
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
              this._rootScope.$broadcast('BANNER.SHOW', this.saveResultMessages[0]);
            }, (reply) => {
              if (!reply.data || !reply.data.errorMessages) {
                this.saveResult = this.saveResultMessages[1];
              } else {
                this.saveResult = reply.data.errorMessage;
              }
              this._rootScope.$broadcast('BANNER.SHOW', this.saveResultMessages[1]);
            })
            .catch(() => this._rootScope.$broadcast('BANNER.SHOW', this.saveResultMessages[1]));
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
              this._rootScope.$broadcast('BANNER.SHOW', this.saveResultMessages[0]);
            }, (reply) => {
              if (!reply.data || !reply.data.errorMessages) {
                this.saveResult = this.saveResultMessages[1];
              } else {
                this.saveResult = reply.data.errorMessage;
              }
              this._rootScope.$broadcast('BANNER.SHOW', this.saveResultMessages[1]);
            })
            .catch(() => this._rootScope.$broadcast('BANNER.SHOW', this.saveResultMessages[1]));
        }
      });
  }

  hideDeleteTooltip() {
    $(".-delete-tooltip").removeClass("-show-tooltip-delete");
  }

  showDeleteTooltip(reportId) {
    let tooltip = $("#delete_" + reportId);
    tooltip.addClass("-show-tooltip-delete");

  }
}

export default UalReportListController;
