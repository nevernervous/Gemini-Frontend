class LoginController {
  /*@ngInject*/
  constructor($location, Token) {
    this.name = 'login';
    this.expired = Token.wasExpired();
    this.loginMessage = "Due to inactivity your session has expired";
  }
}

export default LoginController;
