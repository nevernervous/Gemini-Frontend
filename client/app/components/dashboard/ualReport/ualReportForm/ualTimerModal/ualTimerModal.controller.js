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
    this._executeReportService.run(this.report).then((reply) => {
        this.success(reply.data);
    });
  }

  success(reply){
    this._close(reply);
  }

  getElapsed() {
    let now = +(Date.now());
    return now - (+this.startTime);
  }

  close() {
    this._close(false);
  }
}

export default UalTimerModalController;
