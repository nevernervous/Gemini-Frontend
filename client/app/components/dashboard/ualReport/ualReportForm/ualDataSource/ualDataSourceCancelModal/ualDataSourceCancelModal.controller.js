class UalDataSourceCancelModalController {
  /*@ngInject*/
  constructor(close) {
    this.name = 'ualDataSourceCancelModal';
    this._close = close;
  }

  no() {
    this._close(false);
  }
  yes() {
    this._close(true);
  }
}

export default UalDataSourceCancelModalController;
