class DashboardController {
  /*@ngInject*/
  constructor($rootScope, $state, ualMainMenu, Session, expirationModal) {
    this.name = 'dashboard';
    this._rootScope = $rootScope;
    this._state = $state;
    this.mainMenu = ualMainMenu;
    this._session = Session;
    this._expirationModal = expirationModal;

    this._suscriptions = [];
  }

  expiration() {
    this._expirationModal.open()
    .then( response => response ? this._session.renew() : this._session.logout() );
  }

  _unsuscribe() {
    this._suscriptions.forEach(suscription => suscription());
  }

  $onInit() {
    this._suscriptions.push(this._rootScope.$on('SESSION.EXPIRING', () => this.expiration()));
    this._suscriptions.push(this._rootScope.$on('SESSION.EXPIRED', this._session.logout ));
    this._suscriptions.push(this._rootScope.$on('SESSION.LOGOUT', () =>  {
      this._unsuscribe()
      this._state.go('login');
    }));
  }

}

export default DashboardController;
