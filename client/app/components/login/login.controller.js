class LoginController {
  /*@ngInject*/
  constructor($location, Token) {
    this.name = 'login';
    this.expired = Token.wasExpired();
  }
}

export default LoginController;
