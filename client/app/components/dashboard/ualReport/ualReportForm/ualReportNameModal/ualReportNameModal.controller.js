class ualReportNameModalController {
  /*@ngInject*/
  constructor($rootScope, close, report, reportForm, Report) {
    this.name = 'ualReportNameModal';
    this._close = close;
    this.report = report;
    this.form = reportForm;
    this._rootScope = $rootScope;
    this._service = {
      report: Report
    };
    this.nameSelected = null;
    this.duplicatedName = false;

    this._suscriptions = [];
    this._suscriptions.push($rootScope.$on('SESSION.LOGOUT', () => this._closemodal(true)));
    this._suscriptions.push($rootScope.$on('SESSION.EXPIRED', () => this._closemodal(true)));
    this._suscriptions.push($rootScope.$on('$stateChangeSuccess', () => this._closemodal(false)));

  }

  _closemodal(response) {
    this._suscriptions.forEach(suscription => suscription());
    this._close(response);
  }

  ok() {
    let report = this.report;
    let form = this.form;
    let oldName = _.clone(report.name.get());
    report.name.set(_.clone(this.nameSelected));

    let responseError = [
      (msg) => {},
      (msg) => {},
      (msg) => {
        this.nameSelected = oldName;
        this.duplicatedName = true;
      },
      (msg) => {
        this.nameSelected = oldName;
        this._rootScrope.$broadcast('BANNER.SHOW', msg);
        this._closemodal(false);
      }
    ];
    this.report.save().then(
      result => { this._closemodal(result.msg); }
      , result => {
        responseError[result.code](result.msg);
        this.form.isSaving = false;
      }
    );

    return;

  }
  cancel() {
    this._closemodal(false);
  }

  checkKey(event) {
    this.duplicatedName = false;
  }
}

export default ualReportNameModalController;

