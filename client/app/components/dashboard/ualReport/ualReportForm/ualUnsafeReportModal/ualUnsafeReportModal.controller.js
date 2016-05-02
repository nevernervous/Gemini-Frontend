class ualReportNameModalController {
  /*@ngInject*/
  constructor($timeout, $q, $rootScope, close, $state) {
    this.name = 'ualReportNameModal';
    this._close = close;
    this._q = $q;
    this._timeout = $timeout;

    this._suscriptions = [];
    this._suscriptions.push($rootScope.$on('SESSION.EXPIRED', () => this._closemodal(true)));
    this._suscriptions.push($rootScope.$on('$stateChangeSuccess', () => this._closemodal(false)));
    
  }

  _closemodal(response) {
      this._suscriptions.forEach(suscription => suscription());
      this._close(response);
  }

  ok() {
    this._closemodal(true);
    
  }
  cancel(){
    this._closemodal(false);
  }
}

export default ualReportNameModalController;
