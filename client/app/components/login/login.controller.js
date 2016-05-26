class LoginController {
  /*@ngInject*/
  constructor(Token) {
    this.name = 'login';
    this.expired = Token.wasExpired();
  }
}

export default LoginController;

