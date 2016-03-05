class ExpirationModalController {
  /*@ngInject*/
  constructor(close, Token) {
    this.name = 'expirationModal';
    this._close = close;
    this.remaining = Token.remainingTime;
  }

  yes() {
    this._close(true);
  }
  no() {
    this._close(false);
  }

}

export default ExpirationModalController;
