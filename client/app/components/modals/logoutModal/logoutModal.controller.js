class LogoutModalController {
  /*@ngInject*/
  constructor(close) {
    this.name = 'logoutModal';
    this._close = close;
  }
  
  ok() { 
    this._close(true);
  }
  cancel(){
    this._close(false);
  }
}

export default LogoutModalController;
