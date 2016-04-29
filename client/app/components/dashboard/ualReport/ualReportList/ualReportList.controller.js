class UalReportListController {
  /*@ngInject*/

  constructor(Report) {       
    this.reports = null;    
    this._reportService = Report;
              
    this.predicate = 'lastModificationDate';
    this.reverse = true;
  }
  
  $onInit() {
    this._reportService.all()
      .then(response => this.reports = response.data);                                           
  }  
}

export default UalReportListController;
