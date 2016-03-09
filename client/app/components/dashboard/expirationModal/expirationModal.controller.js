class ExpirationModalController {
  /*@ngInject*/
  constructor($rootScope, close, Token) {
    this.name = 'expirationModal';
    this._close = close;
    this.remaining = Token.remainingTime;

    this._suscriptions = [];
    this._suscriptions.push($rootScope.$on('SESSION.LOGOUT', () =>  {
      this._unsuscribe();
      this._close(true);
    }));
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
