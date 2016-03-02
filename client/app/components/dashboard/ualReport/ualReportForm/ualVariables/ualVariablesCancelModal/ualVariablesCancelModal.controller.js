class UalVariablesCancelModalController {
  /*@ngInject*/
  constructor(close) {
    this.name = 'ualVariablesCancelModal';
    this._close = close;
  }

  no() {
    this._close(false);
  }
  yes() {
    this._close(true);
  }
}

export default UalVariablesCancelModalController;
