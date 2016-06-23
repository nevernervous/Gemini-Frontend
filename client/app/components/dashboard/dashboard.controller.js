class DashboardController {
  /*@ngInject*/
  constructor(
    $rootScope, $state,
    Session,
    ualToast, expirationModal) {
    this.name = 'dashboard';

    // INTERNALS
    this.$rootScope = $rootScope;
    this.$state = $state;

    // PRIVATE
    this._suscriptions = [];

    // SERVICES
    this.services = {
      session: Session
    }

    // COMPONENTS
    this.components = {
      toast: ualToast,
      expiration: expirationModal
    }

  }

  // LIFECYCLE
  $onInit() {

    this._suscriptions.push(this.$rootScope.$on('SESSION.EXPIRING', () => {
      this.expiration()
    }));
    this._suscriptions.push(this.$rootScope.$on('SESSION.EXPIRED', () =>  {
      this.$state.go('login');
    }));
    this._suscriptions.push(this.$rootScope.$on('SESSION.LOGOUT', () =>  {
      this.$state.go('login');
    }));
    this._suscriptions.push(this.$rootScope.$on('BANNER.SHOW', (event, data) => {
      this.components.toast[data.type](data.text, (data.type !== 'error'), 'dashboard section');
    }));
  }

  $onDestroy() {
    while ( this._suscriptions.length > 0 ) {
      const suscription = this._suscriptions.pop();
      suscription();
    }
  }

  expiration() {
    if ( this.services.session.isLogged() ) {

      this.components.expiration.open()
      .then(
        () => this.services.session.renew(),
        () => this.services.session.logout()
      );

    } else {
      this.services.session.logout();
    }
  }

}

export default DashboardController;
