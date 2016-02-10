class AppController {
  /*@ngInject*/
  constructor($rootScope, $state, Token, Session, expirationModal) {
    this.name = 'app';
    this._token = Token;
    this._session = Session;
    this._state = $state;
    this._rootScope = $rootScope;
    this._expirationModal = expirationModal;
    this.initialize();
  }
  
  initialize() { 
    this._startSessionWatcher();
    this._rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams, options) => this._onChangeState(toState.name) );
    this._rootScope.$on('SESSION.EXPIRING', this._expirationModal.open );
    this._rootScope.$on('SESSION.EXPIRED', this._session.logout );
  }
  
  _startSessionWatcher() {
    if ( this._session.isLogged() ) {
      this._token.watch();
    }
    this._onChangeState(this._state.current.name)
  }
  
  _onChangeState(state) {
    this._state.go('dashboard.report'); 
      this._expirationModal.open(); 
    // if ( state === 'login' && this._session.isLogged() ) { 
    //   this._state.go('dashboard.report'); 
    //   this._expirationModal.open();
    // } else if ( state !== 'login' && !this._session.isLogged() ) { 
    //   this._state.go('login');
    // }
  }
}

export default AppController;
