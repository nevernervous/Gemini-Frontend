class UalReportFormController {
  /*@ngInject*/
  constructor(ualDataSource) {
    this.name = 'ualReportForm';
    this._datasourcemodal = ualDataSource;
  }
  
  $onInit() { 
    this._datasourcemodal.open();
  }
}

export default UalReportFormController;
