class LoginController {
  /*@ngInject*/
  constructor($location, Session) {
    this.name = 'login';
    this.expiration = Session.isExpired();
  }
}

export default LoginController;
