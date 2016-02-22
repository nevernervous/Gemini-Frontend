class UalReportFormController {
  /*@ngInject*/
  constructor(ualDataSource) {
    this.name = 'ualReportForm';
    this._ualDataSourceModal = ualDataSource;
  }
  
  openDataSourceModal(){
      this._ualDataSourceModal.open();
  }
  
  
}

export default UalReportFormController;
