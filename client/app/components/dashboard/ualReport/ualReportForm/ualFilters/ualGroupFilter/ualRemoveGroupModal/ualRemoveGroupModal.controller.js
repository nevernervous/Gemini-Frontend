class UalRemoveGroupModalController {
  /*@ngInject*/
   /*@ngInject*/
  constructor($rootScope, close) {
    this.name = 'ualDataSourceCancelModal';
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

export default UalRemoveGroupModalController;
