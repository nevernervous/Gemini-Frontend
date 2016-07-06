class UalTimerModalController {
  /*@ngInject*/
  constructor(close, ExecuteReport, ReportObject) {
    this.name = 'ualTimerModal';
    this._close = close;

    this.startTime = new Date();

    this._executeReportService = ExecuteReport;
    this.report = ReportObject;

    this._initialize();
  }

  _initialize() {
    this.request = this._executeReportService.run(this.report);
    this.request.promise.then((reply) => {
      if (!!reply) {
        this.success(reply);
      }
    }, () => {
      this.close(false);
    });
  }

  success(reply) {
    this._close(reply);
  }

  getElapsed() {
    let now = +(Date.now());
    return now - (+this.startTime);
  }

  close() {
    if (this.request) {
      this.request.cancel();
      this.request = null;
    }
    this._close(false);
  }
}

export default UalTimerModalController;
