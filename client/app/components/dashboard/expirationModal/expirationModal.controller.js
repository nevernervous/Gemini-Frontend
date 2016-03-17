class ExpirationModalController {
  /*@ngInject*/
  constructor($rootScope, close, Token) {
    this.name = 'expirationModal';
    this._close = close;
    this._token = Token;

    this._suscriptions = [];
    this._suscriptions.push($rootScope.$on('SESSION.LOGOUT', () =>  this._closemodal(true)));
    this._suscriptions.push($rootScope.$on('SESSION.EXPIRED', () => this._closemodal(true)));
    this._suscriptions.push($rootScope.$on('SESSION.RENEW', () =>   this._closemodal(true)));
  }

  remaining() {
    return this._token.remainingTime();
  }

  _closemodal(response) {
    this._suscriptions.forEach(suscription => suscription());
    this._close(response);
  }

  yes() {
    this._closemodal(true);
  }
  no() {
    this._closemodal(false);
  }

}

export default ExpirationModalController;
