class LogoutModalController {
  /*@ngInject*/
  constructor(Session, close) {
    this.name = 'logoutModal';
    this._close = close;
    this._session = Session;
  }
  
  ok() { 
    this._session.logout()
    .finally( this._close );
  }
  cancel(){
    this._close();
  }
}

export default LogoutModalController;
