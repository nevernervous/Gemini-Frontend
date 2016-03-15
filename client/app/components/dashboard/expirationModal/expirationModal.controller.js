class ExpirationModalController {
  /*@ngInject*/
  constructor($rootScope, close, Token) {
    this.name = 'expirationModal';
    this._close = close;
    this._token = Token;

    this._suscriptions = [];
    this._suscriptions.push($rootScope.$on('SESSION.LOGOUT', () =>  {
      this._unsuscribe();
      this._close(true);
    }));
  }

  remaining() {
    if (!this._token.isExpiring()) {
      this._close(true);
    }
    return this._token.remainingTime();
  }

  _unsuscribe() {
    this._suscriptions.forEach(suscription => suscription());
  }

  yes() {
    this._close(true);
  }
  no() {
    this._close(false);
  }

}

export default ExpirationModalController;
