class UalVariablesDeteleAllModalController {
  /*@ngInject*/
  constructor(close) {
    this.name = 'ualVariablesDeteleAllModal';
    this._close = close;
  }

  cancel() {
    this._close(false);
  }
  delete() {
    this._close(true);
  }
}

export default UalVariablesDeteleAllModalController;
