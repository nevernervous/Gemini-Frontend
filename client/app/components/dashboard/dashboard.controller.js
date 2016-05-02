class DashboardController {
  /*@ngInject*/
  constructor($rootScope, $state, ualMainMenu, Session, expirationModal,$scope,$timeout) {
    this.name = 'dashboard';
    this._rootScope = $rootScope;
    this._state = $state;
    this.mainMenu = ualMainMenu;
    this._session = Session;
    this._expirationModal = expirationModal;
    this._suscriptions = [];
    this.msg = {};
    this._scope=$scope;
    this._timeout=$timeout;
  }

  expiration() {
    if ( this._session.isLogged() ) {
      this._expirationModal.open()
      .then( response => response ? this._session.renew() : this._session.logout() );
    } else {
      this._session.logout();
    }
  }

  _unsuscribe() {
    this._suscriptions.forEach(suscription => suscription());
  }

  $onInit() {
    this._suscriptions.push(this._rootScope.$on('SESSION.EXPIRING', () => this.expiration()));
    this._suscriptions.push(this._rootScope.$on('SESSION.EXPIRED', () =>  {
      this._unsuscribe();
      this._state.go('login');
    }));
    this._suscriptions.push(this._rootScope.$on('SESSION.LOGOUT', () =>  {
      this._unsuscribe();
      this._state.go('login');
    }));
    this._suscriptions.push(this._rootScope.$on('BANNER.SHOW', (event, data) => this.showBanner(data)));
  }

  showBanner(data) {
    this.msg = data;
    this.msg.hide = false;
    if ( this.msg.type !== '-error' ) {
      this._timeout(
        () => this.msg.hide = true,
        5000);
    }
  }
  hideBanner() {
    this.msg.hide = true;
  }

}

export default DashboardController;

