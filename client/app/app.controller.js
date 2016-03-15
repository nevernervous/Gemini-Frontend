class AppController {
  /*@ngInject*/
  constructor($rootScope, ualNavBar, $state, $timeout, Session) {
    this.name = 'app';
    this._session = Session;
    this._state = $state;
    this._rootScope = $rootScope;
    this._timeout = $timeout;

    this.navBar = ualNavBar;
  }

  _sessionWatcher() {
    this._timeout( () => {
      this._onChangeState(this._state.current.name);
      this._sessionWatcher();
    }, 1000); // EACH 1 SECOND
  }

  _startSessionWatcher() {
    this._onChangeState(this._state.current.name);
    this._sessionWatcher();
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

  $onInit() {
    this._startSessionWatcher();
    this._rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams, options) => this._onChangeState(toState.name, fromState.name, event.preventDefault) );
  }
}

export default AppController;
