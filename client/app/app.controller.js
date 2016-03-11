class AppController {
  /*@ngInject*/
  constructor($rootScope, $state, Session) {
    this.name = 'app';
    this._session = Session;
    this._state = $state;
    this._rootScope = $rootScope;
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

  $onInit() {
    this._startSessionWatcher();
    this._rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams, options) => this._onChangeState(toState.name, fromState.name, event.preventDefault) );
  }
}

export default AppController;
