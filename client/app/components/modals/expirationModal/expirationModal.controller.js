class ExpirationModalController {
  /*@ngInject*/
  constructor($state, close, Session, Token) {
    this.name = 'expirationModal';
    this._close = close;
    this._session = Session;
    this._token = Token;
  }
  
  remaining() { 
    return (new Date().getTime()) - 0; //(this._token.get().updateAt || 0);
  }
  
  yes() { 
    this._session.renew()
    .finally(() => { 
      this._close();
    });    
  }
  no() { 
    this._session.logout()
    .finally(() => { 
      this._close();
      this._state.go('login');  
    });
  }  
  close(){
    this._close();
  }
}

export default ExpirationModalController;
