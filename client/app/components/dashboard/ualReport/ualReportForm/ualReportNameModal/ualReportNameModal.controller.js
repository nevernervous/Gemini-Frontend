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

//    form.messageDisplayed = false;
//    form.saveResult = form.saveResultMessages.get(null);

    let responseError = {
      0: (msg) => {}
      , 1: (msg) => {}
      , 2: (msg) => {
        report.nameDuplicated.set(_.clone(this.report.name.get()));
        this.duplicatedName = true;
//        form.messageDisplayed = false;
      }
      , 3: (msg) => {
        report.name.set(null);
        form.saveResult = form.saveResultMessages.has(2) ? JSON.parse(JSON.stringify(form.saveResultMessages.get(2))) : form.saveResultMessages.get(null);
        if (msg !== false) form.saveResult.msgText = msg;
        this._rootScope.$broadcast('BANNER.SHOW', form.saveResult);
//        form.messageDisplayed = true;

        this._closemodal(false);
      }
    };

    this.report.save().then(
      result => {
        modal._closemodal(true);
      }
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
