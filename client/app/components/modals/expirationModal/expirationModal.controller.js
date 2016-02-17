class ExpirationModalController {
  /*@ngInject*/
  constructor($interval, close, Session, Token) {
    this.name = 'expirationModal';
    this._close = close;
    this._session = Session;
    this._token = Token;
    this._interval = $interval;
    this.initialize();
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
  
  onClose() {
    this.remaining_interval && this._interval.cancel(this.remaining_interval); 
  }
  
  initialize() { 
    this.remaining_interval = this._interval( () => { 
      if (this._token.remainingTime() === 0 ) {
        this._close();
      }
    }, 1000 );
  }
}

export default ExpirationModalController;
