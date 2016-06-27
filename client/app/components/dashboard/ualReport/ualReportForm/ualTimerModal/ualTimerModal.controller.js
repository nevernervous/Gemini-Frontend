class UalTimerModalController {
  /*@ngInject*/
  constructor(close) {
    this.name = 'ualTimerModal';
    this._close = close;

    this.startTime = new Date();
  }

  getElapsed(){
    let now = +(Date.now());
    return now - (+this.startTime);
  }

  close(){
    this._close(false);
  }
}

export default UalTimerModalController;
