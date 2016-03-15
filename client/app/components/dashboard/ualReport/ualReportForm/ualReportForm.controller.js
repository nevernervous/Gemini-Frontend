class UalReportFormController {
  /*@ngInject*/
  constructor($state, ualReport, ualDataSource, ualVariables, Aggregator) {
    this._state = $state;
    this._datasourcemodal = ualDataSource;
    this._variablesmodal = ualVariables;

    this._service = {
      aggregator: Aggregator
    }

    this.report = ualReport;
  }

  // STEP 1
  selectDataSource() {
    this._datasourcemodal.open({selected: this.report.datasource.get()})
    .then(datasource => {
      if ( datasource && !this.report.datasource.equal(datasource)) {

        this.report.datasource.set(datasource);
        this.report.variables.set([]);
        this._service.aggregator.all(datasource)
        .then(aggregators => {
          this.report.aggregators.set(_.filter(aggregators.data, 'isDefaultAggregator'))
        })

      } else if (!datasource) {
        this._state.go('dashboard.report-list');
      }
    });
  }

  // STEP 2
  selectVariables() {
    this._variablesmodal.open({datasource: this.report.datasource.get(), selecteds: this.report.variables.get()})
    .then(variables => this.report.variables.set(variables));
  }

  $onInit() {
    this.report.create();
    this.selectDataSource();
  }


}

export default UalReportFormController;
