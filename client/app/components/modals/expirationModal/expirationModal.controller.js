class ExpirationModalController {
  /*@ngInject*/
  constructor($rootScope, close, Session, Token) {
    this.name = 'expirationModal';
    this._close = close;
    this._session = Session;
    this.remaining = Token.remainingTime;
    
    $rootScope.$on('SESSION.LOGOUT', () => this._close() ); 
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
