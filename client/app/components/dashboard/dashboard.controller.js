class DashboardController {
  /*@ngInject*/
  constructor($rootScope, $state, ualMainMenu, Session, expirationModal, ualUnsafeReportModal, ualReport) {
    this.name = 'dashboard';
    this._rootScope = $rootScope;
    this._state = $state;
    this.mainMenu = ualMainMenu;
    this._session = Session;
    this._expirationModal = expirationModal;

    this._ualUnsafeReportModal = ualUnsafeReportModal;
    this._suscriptions = [];
    
    this.report = ualReport;
    
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
    
    this._suscriptions.push(this._rootScope.$on('$stateChangeStart', ( event, toState, toParams, fromState, fromParams ) => {
        if(this._state.current.url.match(/\/report\/new/gi) && this.report.touched()){
            console.log(this.report.exitConfirmed.get());
            if(!this.report.exitConfirmed.get()){
                event.preventDefault();
                this._ualUnsafeReportModal.open({state: this._state, toState: toState, report: this.report});
            }else{
                this.report.exitConfirmed.set(false);
            }
        }
    }));
    
  }

}

export default DashboardController;
