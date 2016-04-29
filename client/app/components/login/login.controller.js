class LoginController {
  /*@ngInject*/
  constructor($location, Token) {
    this.name = 'login';
    this._expired = Token.wasExpired();
    this.msgClass={
      'banner-login':true,
      'banner-show':this._expired}
    this.loginMessage = "Due to inactivity your session has expired";
  }
}

export default LoginController;
