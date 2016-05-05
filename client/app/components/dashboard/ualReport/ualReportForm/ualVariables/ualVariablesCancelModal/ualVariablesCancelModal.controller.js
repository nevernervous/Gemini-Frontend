class UalVariablesCancelModalController {
  /*@ngInject*/
  constructor($rootScope, close) {
    this.name = 'ualVariablesCancelModal';
    this._close = close;

    this._suscriptions = [];
    this._suscriptions.push($rootScope.$on('SESSION.LOGOUT', () =>  this._closemodal(true)));
    this._suscriptions.push($rootScope.$on('SESSION.EXPIRED', () => this._closemodal(true)));
  }

  _closemodal(response) {
    this._suscriptions.forEach(suscription => suscription());
    this._close(response);
  }

  no() {
    this._closemodal(false);
  }
  yes() {
    this._closemodal(true);
  }
}

export default UalVariablesCancelModalController;
