class LoginController {
  /*@ngInject*/
  constructor($location) {
    this.name = 'login';
    this.expiration = !!$location.search().expiration;
  }
}

export default LoginController;
