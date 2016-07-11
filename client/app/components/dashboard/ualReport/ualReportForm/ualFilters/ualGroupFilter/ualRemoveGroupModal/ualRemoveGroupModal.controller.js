class UalRemoveGroupModalController {
  /*@ngInject*/
   /*@ngInject*/
  constructor($rootScope, close) {
    this.name = 'ualDataSourceCancelModal';
    this._close = close;

    this._suscriptions = [];
    this._suscriptions.push($rootScope.$on('SESSION.LOGOUT', () => this._closemodal({status: 'cancel'})));
    this._suscriptions.push($rootScope.$on('SESSION.EXPIRED', () => this._closemodal({status: 'cancel'})));
    this._suscriptions.push($rootScope.$on('$stateChangeSuccess', () => this._closemodal({status: 'cancel'})));
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
