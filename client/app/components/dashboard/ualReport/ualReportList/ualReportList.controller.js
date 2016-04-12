class UalReportListController {
  /*@ngInject*/
  constructor(Report) {       
    this.reports = [];    
    this._reportService = Report;
              
    this.predicate = 'lastModificationDate';
    this.reverse = true;
  }
  
  $onInit() {
    this._reportService.all()
      .then(response => this.reports = _.chain(response.data)
                                       .sortByOrder(['lastModificationDate'], ['desc'])
                                       .value());                                           
  }  
}

export default UalReportListController;
