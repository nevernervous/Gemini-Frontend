class UalReportFormController {
    /*@ngInject*/
    constructor($state, ualReport, ualDataSource, ualVariables, Aggregator, $document) {
        this._state = $state;
        this._datasourcemodal = ualDataSource;
        this._variablesmodal = ualVariables;
        this.maxAggregators = 10;

        this._service = {
            aggregator: Aggregator
        }

        $document.bind("mouseup", (event) => {
            this.hideDropDown(event);
        });

        this.dropDownStyle = {};

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
            aggregator.disabled = true;
            addedAggregators.push(aggregator);
        }
    }
    
    hideDropDown(event) {
        let $container = $("#inpAggregators");
        let isChild = $container.has(event.target).length > 0;
        let isSame = $container.is(event.target);
        if (!isSame && !isChild) {
            this.dropDownStyle.visibility = 'hidden';
            this.inputStyle.position = 'static';
        }
    }


}

export default UalReportFormController;