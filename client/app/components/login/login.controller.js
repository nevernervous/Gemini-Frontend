import logo from './logo.png';

class LoginController {
  /*@ngInject*/
  constructor(Token, ualToast) {
    this.name = 'login';
    this.logo = logo;
    this.expired = Token.wasExpired();

    this.service = {
      toast: ualToast
    }
  }

  $postLink() {
    if ( this.expired ) {
      this.service.toast.warning('Due to inactivity, your session has expired', false);
    }
  }
}

export default LoginController;
