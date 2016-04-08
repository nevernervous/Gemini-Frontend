class UalReportListController {
  /*@ngInject*/
  constructor(Report, $filter) {
    this.name = 'ualReportList';        
    this.reports = [];    
    this._reportService = Report;
    this._filter = $filter;
    this.predicate = 'lastModificationDate';
    this.reverse = true;
    
    this._initialize();
  }
  
  _initialize() {
    this._reportService.all()
      .then(response => this.reports = _.chain(response.data)
                                       .sortByOrder(['lastModificationDate'], ['desc'])
                                       .value());                                           
  }  
  
  order(predicate) {
    console.log(predicate);  
    this.predicate = predicate;
    this.reverse = (this.predicate === predicate) ? !this.reverse : false;
    this.reports = this._filter('orderBy')(this.reports, predicate, this.reverse);
  };  
  
}

export default UalReportListController;
