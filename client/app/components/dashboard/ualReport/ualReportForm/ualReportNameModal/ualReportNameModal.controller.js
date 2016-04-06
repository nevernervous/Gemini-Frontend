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
  }

  _closemodal(response) {
//      this._suscriptions.forEach(suscription => suscription());
      this._close(response);
  }

  ok() {
    let report = this.report;
    let form = this.form;
    let modal = this;
    this._service.report.save(report).then(
        function(response){
            form.setMesage(0);
            report.reportId.set(response.data.reportId);
            form.messageDisplayed = true;
            
            modal._closemodal(true);
        },
        function(response){
            if(true){ 
                form.setMesage(1);
                form.messageDisplayed = true;
                
                this._closemodal(true);
            }else{ 
                modal.duplicatedName = true;
                form.messageDisplayed = false;
                //form.setMesage();
            }
            console.log("muerte... destrucción.... cumbia");
        }
    ).catch(function(){
        form.setMesage();
        form.messageDisplayed = true;
        
        modal._closemodal(true);
    }).finally(function(){
//            console.log("hola mundo");
//            $apply();
    });
    //this._closemodal(true);
  }
  cancel(){
    this._closemodal(false);
  }

  checkKey(event){
          this.duplicatedName = false;
  }
}

export default ualReportNameModalController;
