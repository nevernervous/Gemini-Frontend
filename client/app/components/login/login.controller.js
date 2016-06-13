import logo from './logo.png';

class LoginController {
  /*@ngInject*/
  constructor(Token, ualToast) {
    this.name = 'login';
    this.logo = logo;
    this.expired = true; //Token.wasExpired();

    this.service = {
      toast: ualToast
    }
  }

  $postLink() {
    if ( this.expired ) {
      this.service.toast.error('Simple Toast!', false);
    }
  }
}

export default LoginController;
