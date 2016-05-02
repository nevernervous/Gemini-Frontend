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
    let modal = this;
    let report = this.report;
    let form = this.form;

    report.name.set(this.nameSelected);

    let saveSuccess = (msg) => {
      this._rootScope.$broadcast('BANNER.SHOW', msg);
      this.duplicatedName = false;
      this._state.go("dashboard.report-edit", {
        "id": this.report.reportId.get()
      }, {
        notify: false
      });
    }
    let responseError = [
      (msg) => {},
      (msg) => {},
      (msg) => {
        report.nameDuplicated.set(_.clone(this.report.name.get()));
        this.duplicatedName = true;
      },
      (msg) => {
        report.name.set(null);
        this._rootScrope.$broadcast('BANNER.SHOW', msg);
        this._closemodal(false);
      }
    ];
    this.report.save().then(
      result => { saveSuccess(result.msg); }
      , result => {
        responseError[result.code](result.msg);
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

