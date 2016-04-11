class UalReportListController {
  /*@ngInject*/
  constructor(Report, $filter, $rootScope, ualReportListDeleteReportModal) {
    this.reports = [];    
    this._reportService = Report;
    this._deletereportmodal = ualReportListDeleteReportModal;
    
    this._filter = $filter;
    this.predicate = 'lastModificationDate';
    this.reverse = true;
    
    this._initialize();  
    
    this._suscriptions = [];
    this._suscriptions.push($rootScope.$on('SESSION.LOGOUT', () =>  this._closemodal(true)));
    this._suscriptions.push($rootScope.$on('SESSION.EXPIRED', () => this._closemodal(true)));  
  }
  
  _closemodal(response) {
    this._suscriptions.forEach(suscription => suscription());
    this._close(response);
  }  
  
  _initialize() {

    this._reportService.all()
      .then(response => this.reports = _.chain(response.data)
                                       .sortByOrder(['lastModificationDate'], ['desc'])
                                       .value());                                          
  }
  
  order(predicate) {      
    this.predicate = predicate;
    this.reverse = (this.predicate === predicate) ? !this.reverse : false;
    
    if (predicate.indexOf("-lastModificationDate") > -1)
      predicate[1] = this.reverse ? "lastModificationDate" : '-lastModificationDate';  
    
    this.reports = this._filter('orderBy')(this.reports, predicate, this.reverse);
  };  
  
  contains(column){
      return (this.predicate.indexOf(column) > -1);
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
