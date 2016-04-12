class UalReportListController {
  /*@ngInject*/
  constructor(Report, $rootScope, ualReportListDeleteReportModal) { 
    this._rootScope = $rootScope;      
    this.reports = [];    
    this._reportService = Report;
    this._deletereportmodal = ualReportListDeleteReportModal;
              
    this.predicate = 'lastModificationDate';
  }
  
  $onInit() {
    this._suscriptions = [];
    this._suscriptions.push(this._rootScope.$on('SESSION.LOGOUT', () =>  this._closemodal(true)));
    this._suscriptions.push(this._rootScope.$on('SESSION.EXPIRED', () => this._closemodal(true)));  
  
    this._reportService.all()
      .then(response => this.reports = response.data);
  }  
  
  _closemodal(response) {
    this._suscriptions.forEach(suscription => suscription());
    this._close(response);
  }
  
  deleteReport(report) {
    this._deletereportmodal.open()
    .then(response => {
      if (response) {          
        this._reportService.delete(report.id)
        .then(function(response){
           this.reports = this.reports = this.reports
                                .filter(function (item) {
                                    return item.id !== report.id;
                                }); 
        }); 
      }
    });
  }
}

export default UalReportListController;
