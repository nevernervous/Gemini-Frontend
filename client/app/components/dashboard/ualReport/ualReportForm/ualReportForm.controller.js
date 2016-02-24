class UalReportFormController {
  /*@ngInject*/
  constructor($state, ualReport, ualDataSource) {
    this._state = $state;
    this._datasourcemodal = ualDataSource;
    this._report = ualReport;
  }
  
  // STEP 1
  selectDataSource() { 
    this._datasourcemodal.open({selected: this._report.datasource.get()})
    .then(datasource => {
      datasource ? 
        (datasource !== this._report.datasource.selected) && this.selectVariables() :  
        this._state.go('dashboard.report-list');
    });
  }
  
  // STEP 2
  selectVariables() { 
    console.log('SELECT VARIABLES');
  }  
  
  $onInit() { 
    this._report.create();
    this.selectDataSource();
  }
}

export default UalReportFormController;
