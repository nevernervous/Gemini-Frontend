class UalReportListController {
  /*@ngInject*/
  constructor(Report) {
    this.name = 'ualReportList';
        
    this.reports = [];
    
    this._reportService = Report;
    
    this._initialize();
  }
  
  //_initialize() ¿Cuál dejar?
  //$onInit() {
  _initialize() {
    this._reportService.all()
      .then(response => this.reports = response.data);
  }
}

export default UalReportListController;
