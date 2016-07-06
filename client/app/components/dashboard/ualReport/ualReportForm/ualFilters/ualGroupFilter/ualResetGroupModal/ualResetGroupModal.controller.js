class UalResetGroupModalController {
  /*@ngInject*/
  constructor(close) {
    this.name = 'ualResetGroupModal';
    this._close = close;
  }

  _closemodal(response) {
    this._close(response);
  }

  no() {
    this._closemodal(false);
  }
  yes() {
    this._closemodal(true);
  }
}

export default UalResetGroupModalController;
