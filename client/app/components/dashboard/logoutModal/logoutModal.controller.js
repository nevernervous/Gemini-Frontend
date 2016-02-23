class LogoutModalController {
  /*@ngInject*/
  constructor($rootScope, close) {
    this.name = 'logoutModal';
    this._close = close;
    
    $rootScope.$on('SESSION.LOGOUT', () => this._close(false) ); 
  }
  
  ok() { 
    this._close(true);
  }
  cancel(){
    this._close(false);
  }

}

export default LogoutModalController;
