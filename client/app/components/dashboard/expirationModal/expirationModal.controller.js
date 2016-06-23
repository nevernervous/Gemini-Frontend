class ExpirationModalController {
  /*@ngInject*/
  constructor(
    $mdDialog,
    Token) {
    this.name = 'expirationModal';

    // INTERNALS
    this.$mdDialog = $mdDialog;

    // SERVICES
    this.services = {
      token: Token
    }
  }

  remaining() {
    return this.services.token.remainingTime();
  }

  no() {
    this.$mdDialog.cancel();
  };
  yes() {
    this.$mdDialog.hide();
  };

}

export default ExpirationModalController;
