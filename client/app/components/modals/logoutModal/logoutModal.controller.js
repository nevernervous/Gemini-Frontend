class LogoutModalController {
  /*@ngInject*/
  constructor($rootScope, Session, close) {
    this.name = 'logoutModal';
    this._close = close;
    this._session = Session;
    
    $rootScope.$on('SESSION.LOGOUT', () => this._close() ); 
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
