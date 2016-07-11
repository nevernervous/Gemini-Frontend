class UalResetGroupModalController {
  /*@ngInject*/
  constructor(close, $rootScope) {
    this.name = 'ualResetGroupModal';
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

export default UalResetGroupModalController;
