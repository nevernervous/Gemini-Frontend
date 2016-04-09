class ualReportNameModalController {
  /*@ngInject*/
  constructor($rootScope, close, $state, toState, state, report) {
    this.name = 'ualReportNameModal';
    this._close = close;
    this.toState = toState;
    this.state = $state;
    this._report = report;
  }

  _closemodal(response) {
//      this._suscriptions.forEach(suscription => suscription());
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
