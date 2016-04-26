class ualReportNameModalController {
  /*@ngInject*/
  constructor($rootScope, close, report, reportForm, Report) {
    this.name = 'ualReportNameModal';
    this._close = close;
    this.report = report;
    this.form = reportForm;
    this._service = {
            report: Report
        };
    this.nameSelected = null;
<<<<<<< HEAD

=======

>>>>>>> 9b30821c81c33f05a10dbc6ec2732b86a7ab6257
    this.duplicatedName = false;

    this._suscriptions = [];
    this._suscriptions.push($rootScope.$on('SESSION.LOGOUT', () =>  this._closemodal(true)));
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

    form.messageDisplayed = false;
    form.saveResult = form.saveResultMessages.get(null);


    this.report.save().then(
      result => {
        modal._closemodal(true);
      }
      , result => {
        switch(result){
          case 'NONAMEASSIGNED':
            break;
          case 'NOCHANGES':
            break;
          case 'DUPLICATEDNAME':
            report.nameDuplicated.set(_.clone(this.report.name.get()));
            this.duplicatedName = true;
            form.messageDisplayed = false;
            break;
          default:
            report.name.set(null);
            form.saveResult = form.saveResultMessages.has(2) ? JSON.parse(JSON.stringify(form.saveResultMessages.get(2))) : form.saveResultMessages.get(null);
            if(result !== false) form.saveResult.msgText = result;
            form.messageDisplayed = true;

            this._closemodal(false);
        }
      }
    );

    return;

  }
  cancel(){
    this._closemodal(false);
  }

  checkKey(event){
          this.duplicatedName = false;
  }
}

export default ualReportNameModalController;
