class UalExecutedReportModalController {
  /*@ngInject*/
  constructor(close) {
    this.name = 'ualExecutedReportModal';
    this._close = close;
  }
  
  close(){
    this._close(false);
  }
}

export default UalExecutedReportModalController;
