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
    this._rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams, options) => this._onChangeState(toState.name, fromState.name, event.preventDefault) );
    this._rootScope.$on('SESSION.EXPIRING', this._expirationModal.open );
    this._rootScope.$on('SESSION.EXPIRED', this._session.logout );
    this._rootScope.$on('SESSION.LOGOUT', () =>  this._state.go('login') );
  }
  
  _startSessionWatcher() {
    this._onChangeState(this._state.current.name)
  }
  
  _onChangeState(next, prev = '', cancel = ()=>{}) {
    if ( this._session.isLogged() ) { 
      if ( next === 'login' || next === '') { 
          this._state.go('dashboard.report-list');
      }
    } else { 
      if ( next !== 'login' ) {
        this._state.go('login');
      }
    }
  }
}

export default AppController;
