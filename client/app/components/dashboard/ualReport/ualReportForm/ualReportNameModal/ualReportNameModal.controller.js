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
    let report = this.report;
    let form = this.form;
    let modal = this;

    this.report.name.set(this.nameSelected);
    this._service.report.save(report).then(
        function(response){
            //form.saveResult = form.saveResultMessages[0];
            //form.saveResultMessages.has(0)? form.saveResultMessages.get(0) : form.saveResultMessages.get(null);
            form._rootScope.$broadcast('BANNER.SHOW', form.saveResultMessages[0]);

            report.reportId.set(response.data.id);
            form.messageDisplayed = true;

            form.isNewReport = false;
            form.reportLoaded = true;

            report.untouch();
            modal._closemodal(true);
        },
        function(response){
            report.name.set(null);

            //UNEXPECTED ERROR
            if(!response.data || !response.data.errorMessages){
                //form.saveResult = form.saveResultMessages[2];
                //form.saveResult = form.saveResultMessages.has(2)? form.saveResultMessages.get(2) : form.saveResultMessages.get(null);
                form.messageDisplayed = true;
                form._rootScope.$broadcast('BANNER.SHOW', form.saveResultMessages[2]);
                this._closemodal(false);
            }else if(response.data.errorMessages.indexOf(form.duplicatedErrorResponse) < 0){
            //EXPECTED ERROR
                //form.saveResult = form.saveResultMessages[2];
                // form.saveResult = form.saveResultMessages.has(2)? form.saveResultMessages.get(2) : form.saveResultMessages.get(null);
                // form.saveResult.msgText = response.data.errorMessage;
                form.messageDisplayed = true;
                form._rootScope.$broadcast('BANNER.SHOW', form.saveResultMessages[2]);
                this._closemodal(false);
            }else{
            //DUPLICATED NAME
                modal.duplicatedName = true;
                form.messageDisplayed = false;
            }
        }
    ).catch(function(){
        //form.saveResult = form.saveResultMessages[2];
        //form.saveResult = form.saveResultMessages.has(2)? form.saveResultMessages.get(2) : form.saveResultMessages.get(null);
        form.messageDisplayed = true;
        form._rootScope.$broadcast('BANNER.SHOW', form.saveResultMessages[2]);
        modal._closemodal(false);
    }).finally( () => {report.saving.setSaving(false);} );
  }
  cancel(){
    this._closemodal(false);
  }

  checkKey(event){
    this.duplicatedName = false;
  }
}

export default ualReportNameModalController;

