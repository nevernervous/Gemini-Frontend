class ualReportNameModalController {
  /*@ngInject*/
  constructor($timeout, $q, $rootScope, close, $state, toState, state, report) {
    this.name = 'ualReportNameModal';
    this._close = close;
    this.toState = toState;
    this.state = $state;
    this._report = report;
    this._q = $q;
    this._timeout = $timeout;

    this._suscriptions = [];
    this._suscriptions.push($rootScope.$on('SESSION.LOGOUT', () =>  this._closemodal(true)));
    this._suscriptions.push($rootScope.$on('SESSION.EXPIRED', () => this._closemodal(true)));
    this._suscriptions.push($rootScope.$on('$stateChangeSuccess', () => this._closemodal(false)));
    
  }

  _closemodal(response) {
      this._close();
      this._suscriptions.forEach(suscription => suscription());
      this._close(response);
  }

  ok() {
//    $state.go();
    this._report.exitConfirmed.set(true);
    this._closemodal(false);
    this.state.go(this.toState.name);
  }
  cancel(){
    this._closemodal(false);
  }

  checkKey(event){
          this.duplicatedName = false;
  }
}

export default ualReportNameModalController;
