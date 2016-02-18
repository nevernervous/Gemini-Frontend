class ExpirationModalController {
  /*@ngInject*/
  constructor(close, Session, Token) {
    this.name = 'expirationModal';
    this._close = close;
    this._session = Session;
    this._token = Token;
  }
  
  remaining() { 
    return this._token.remainingTime();
  }
  
  yes() { 
    this._session.renew()
    .finally(() => { 
      this._close();
    });    
  }
  no() { 
    this._session.logout()
    .finally( this._close ); 
  }  
  close() {  
    this._close();
  }
  
}

export default ExpirationModalController;
