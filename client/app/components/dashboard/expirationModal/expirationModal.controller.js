class ExpirationModalController {
  /*@ngInject*/
  constructor($rootScope, close, Token) {
    this.name = 'expirationModal';
    this._close = close;
    this.remaining = Token.remainingTime;
    
    $rootScope.$on('SESSION.LOGOUT', () => this._close(false) ); 
  }
    
  yes() { 
    this._close(true);    
  }
  no() { 
    this._close(false); 
  }  
  
}

export default ExpirationModalController;
