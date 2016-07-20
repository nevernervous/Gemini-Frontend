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
    const remaining = this.services.token.remainingTime();
    if ( remaining === 0 ) {
      this.$mdDialog.cancel();
    } 
    return remaining;
  }

  no() {
    this.$mdDialog.cancel();
  };
  yes() {
    this.$mdDialog.hide();
  };

}

export default ExpirationModalController;
