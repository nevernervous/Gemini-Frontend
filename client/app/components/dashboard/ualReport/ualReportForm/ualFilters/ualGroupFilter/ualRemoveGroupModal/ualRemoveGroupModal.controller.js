class UalRemoveGroupModalController {
   /*@ngInject*/
  constructor($rootScope, close) {
    this.name = 'ualRemoveGroupModal';
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
