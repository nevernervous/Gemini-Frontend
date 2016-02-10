class LogoutModalController {
  /*@ngInject*/
  constructor($state, close) {
    this.name = 'logoutModal';
    this._close = close;
    this._state = $state;
  }
  
  ok() { 
    // TODO: REMOVE SESSION
    this._state.go('login');
    this._close();
  }
  cancel(){
    this._close();
  }
}

export default LogoutModalController;
