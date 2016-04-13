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
    this._service.report.save(report).then(
        function(response){
            form.saveResult = form.saveResultMessages.has(0)? form.saveResultMessages.get(0) : form.saveResultMessages.get(null);
            report.reportId.set(response.data.reportId);
            form.messageDisplayed = true;
            report.untouch();
            
            modal._closemodal(true);
        },
        function(response){
            if(response.data.indexOf(form.duplicatedErrorResponse) < 0){ 
                form.saveResult = form.saveResultMessages.has(1)? form.saveResultMessages.get(1) : form.saveResultMessages.get(null);
                form.messageDisplayed = true;
                
                this._closemodal(false);
            }else{ 
                modal.duplicatedName = true;
                form.messageDisplayed = false;
                //form.setMesage();
            }
        }
    ).catch(function(){
        form.saveResult = form.saveResultMessages.has(2)? form.saveResultMessages.get(2) : form.saveResultMessages.get(null);
        form.messageDisplayed = true;
        
        modal._closemodal(false);
    });
  }
  cancel(){
    this._closemodal(false);
  }

  checkKey(event){
          this.duplicatedName = false;
  }
}

export default ualReportNameModalController;
