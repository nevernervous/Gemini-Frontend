class UalReportFormController {
  /*@ngInject*/
  constructor($state, ualReport, ualDataSource, ualVariables) {
    this._state = $state;
    this._datasourcemodal = ualDataSource;
    this._variablesmodal = ualVariables;
    this._report = ualReport;
  }
  
  // STEP 1
  selectDataSource() { 
    this._datasourcemodal.open({selected: this._report.datasource.get()})
    .then(datasource => {
      datasource ? 
        this._report.datasource.set(datasource) || this.selectVariables() :  
        this._state.go('dashboard.report-list');
    });
  }
  
  // STEP 2
  selectVariables() { 
    this._variablesmodal.open({datasource: this._report.datasource.get(), selecteds: this._report.variables.get()})
    .then(variables => this._report.variables.set(variables));    
  }  
  
  $onInit() { 
    this._report.create();
    this.selectDataSource();
  }
}

export default UalReportFormController;
