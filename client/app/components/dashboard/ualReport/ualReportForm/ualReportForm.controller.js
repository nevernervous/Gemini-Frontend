class UalReportFormController {
    /*@ngInject*/
    constructor($state, ualReport, ualDataSource, ualVariables, Aggregator, $timeout) {
        this._state = $state;
        this._datasourcemodal = ualDataSource;
        this._variablesmodal = ualVariables;
        this.maxAggregators = 10;

        this._timeout = $timeout;

        this._service = {
            aggregator: Aggregator
        }
        this.dropDownStyle = {};
        this.inputStyle = {};

        this.report = ualReport;
    }

    // STEP 1
    selectDataSource() {
        this._datasourcemodal.open({
            selected: this.report.datasource.get()
        })
            .then(datasource => {
                if (datasource && !this.report.datasource.equal(datasource)) {

                    this.report.datasource.set(datasource);
                    this.report.variables.set([]);
                    this._service.aggregator.all(datasource)
                        .then(aggregators => {
                            let defaultAggregators = _.chain(aggregators.data)
                                                      .filter('isDefaultAggregator')
                                                      .sortBy('order')
                                                      .value();
                            this.report.aggregators.set(defaultAggregators);
                        });

                    this._service.aggregator.groups(datasource)
                        .then((reply) => {
                            this.aggregators = reply.data;
                        });

                } else if (!datasource) {
                    this._state.go('dashboard.report-list');
                }
            });
    }

    // STEP 2
    selectVariables() {
        this._variablesmodal.open({
            datasource: this.report.datasource.get(),
            selecteds: this.report.variables.get()
        })
            .then(variables => this.report.variables.set(variables));
    }


    $onInit() {
        this.report.create();
        this.selectDataSource();
    }

    addAggregator(aggregator) {
        let addedAggregators = this.report.aggregators.get();
        if (!_.some(addedAggregators, { id: aggregator.id }) && addedAggregators.length < this.maxAggregators) {
            addedAggregators.push(aggregator);
        }
    }
    
    isAggregated(aggregator){
        return _.some(this.report.aggregators.get(), { id: aggregator.id });
    }
    
    hideDropDown() {
        this._timeout(() => {
            this.dropDownStyle.visibility = 'hidden';
            this.inputStyle.position = 'static';
        }, 100);
    }
    
    showDropdown(){
        this.inputStyle.position = 'relative';
        this.dropDownStyle.visibility = 'visible'
    }


}

export default UalReportFormController;