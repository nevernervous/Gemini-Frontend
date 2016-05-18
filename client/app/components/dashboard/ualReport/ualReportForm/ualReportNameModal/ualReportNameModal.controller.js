class ualReportNameModalController {
  /*@ngInject*/
  constructor($rootScope, close, report) {
    this.name = 'ualReportNameModal';
    this._close = close;
    this.report = report;
    this._rootScope = $rootScope;

    this.name = {
      current: null,
      duplicated: false
    }

    this._suscriptions = [];
    this._suscriptions.push($rootScope.$on('SESSION.LOGOUT', () => this._closemodal({status: 'cancel'})));
    this._suscriptions.push($rootScope.$on('SESSION.EXPIRED', () => this._closemodal({status: 'cancel'})));
    this._suscriptions.push($rootScope.$on('$stateChangeSuccess', () => this._closemodal({status: 'cancel'})));
  }

  _closemodal(response) {
    this._suscriptions.forEach(suscription => suscription());
    this._close(response);
  }

  ok() {
    this.report.name.set(_.clone(this.name.current));

    this.report.save().then(
      result => {
        this._closemodal({status: 'success', msg: result.msg, name: this.name.current});
      },
      result => {
        console.log(result);
        if ( result.code === 2 ) {
          this.name.duplicated = true;
        } else if ( result.code === 0 ) {
          this._closemodal({status: 'success', msg: result.msg, name: this.name.current});
        } else {
          this._closemodal({status: 'error', msg: result.msg, name: this.name.current});
        }
      }
    );
  }
  cancel() {
    this._closemodal({status: 'cancel'});
  }

}

export default ualReportNameModalController;

