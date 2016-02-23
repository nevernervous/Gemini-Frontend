class DashboardController {
  /*@ngInject*/
  constructor($rootScope, $state, ualMainMenu, Session, expirationModal) {
    this.name = 'dashboard';
    this._rootScope = $rootScope;
    this._state = $state;
    this.mainMenu = ualMainMenu;
    this._session = Session;
    this._expirationModal = expirationModal;    
  }
  
  expiration() { 
    this._expirationModal.open()
    .then( response => response ? this._session.renew() : this._session.logout() );
  }
  
  $onInit() { 
    this._rootScope.$on('SESSION.EXPIRING', () => this.expiration() );
    this._rootScope.$on('SESSION.EXPIRED', this._session.logout );
    this._rootScope.$on('SESSION.LOGOUT', () =>  this._state.go('login') );
  }
 
}

export default DashboardController;
