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

    this.saveResultMessages = new Map();

    this.saveResultMessages.set(null, { msgClass: {}, msgText: "" });
    this.saveResultMessages.set(0, { msgClass: { "-success": true, "-autoclose": true }, msgText: "Report saved successfully." });
    this.saveResultMessages.set(1, { msgClass: { "-error": true, "-closeable": true }, msgText: "The report was not saved due to an unexpected error. Please try again or contact the Gemini administrator." });
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

  onCatch() {
    this.saveResult = this.saveResultMessages.has(1) ? this.saveResultMessages.get(1) : this.saveResultMessages.get(null);
    this._rootScope.$broadcast('BANNER.SHOW', this.saveResult);
  }

  onErrorResponse(response) {
    if (!response.data || !response.data.errorMessages) {
      this.saveResult = this.saveResultMessages.has(1) ? this.saveResultMessages.get(1) : this.saveResultMessages.get(null);
    } else {
      this.saveResult = {
        msgClass: {
          "-error": true,
          "-closeable": true
        },
        msgText: response.data.errorMessage
      };
    }
    this._rootScope.$broadcast('BANNER.SHOW', this.saveResult);
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
            }, this.onErrorResponse)
            .catch(this.onCatch);
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
            }, this.onErrorResponse)
            .catch(this.onCatch);
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
