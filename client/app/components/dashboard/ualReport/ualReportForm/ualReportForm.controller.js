class UalReportFormController {
  /*@ngInject*/
  constructor($state, ualReport, ualDataSource, ualVariables, Aggregator, Report, DataSource, $scope, $q) {
    this._state = $state;
    this._datasourcemodal = ualDataSource;
    this._variablesmodal = ualVariables;
    this.maxAggregators = 10;
    this._q = $q;

    this._scope = $scope;
    this._suscriptions = [];

    this._service = {
      aggregator: Aggregator,
      report: Report,
      datasource: DataSource
    }

    this.dropDownStyle = {};
    this.inputStyle = {};

    this.report = ualReport;
  }

  intersectWith(array, query, comparator) {
    let result = [];
    _.forEach(query, (q) => {
      return _.some(array, (item) => {
        if (!_.isMatch(item, comparator(q))) {
          return false
        }
        result.push(item);
        return true;
      });
    });
    return result;
  };

  $onInit() {
    let reportId = this._state.params["id"];
    if (!reportId) {
      this.report.create();
      this.selectDataSource();
      this.isNewReport = true;
    } else {
      this.isNewReport = false;
      this.openReport(reportId);
    }

    this._suscriptions.push(this._scope.$on('UALMODAL.OPEN', () => this.hideDropdown()));
    this._scope.$on('$stateChangeStart', () => this._unsuscribe());
  }

  _unsuscribe() {
    this._suscriptions.forEach(suscription => suscription());
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
          this.report.aggregators.set([]);

          this._service.aggregator.groups(datasource)
            .then((reply) => {
              this.aggregators = reply.data;
              let defaultAggregators = _.chain(reply.data.items)
                .filter('isDefaultAggregator')
                .sortBy('order')
                .value();
              this.report.aggregators.set(defaultAggregators);
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

  getReport(reportId) {
    return this._service.report.getById(reportId).then((reply) => {
      return reply;
    });
  }

  openReport(reportId) {
    this.report.create();
    this.getReport(reportId)
      .then((reply) => {
        let reportData = reply.data;

        reportData.datasource = {
          id: reportData.dataSourceId,
          name: reportData.dataSource
        };

        return this._q.all([
          this._service.aggregator.groups(reportData.datasource),
          this._service.datasource.variables(reportData.datasource),
          this._q.when(reportData),
        ]);
      })
      .spread((replyAggregators, replyVariables, reportData) => {
        let aggregators = replyAggregators.data;
        let variables = replyVariables.data;

        let selectedAggregators = this.intersectWith(aggregators.items, reportData.aggregators, (matcher) => {
          return { id: matcher.Id }
        });

        let selectedVariables = this.intersectWith(variables.items, reportData.variables, (matcher) => {
          return { id: matcher.Id };
        });

        this.aggregators = aggregators;
        this.report.set(reportData);
        this.report.datasource.set(reportData.datasource);
        this.report.aggregators.set(selectedAggregators);
        this.report.variables.set(selectedVariables);

      });
  }

  addAggregator(aggregator) {
    let addedAggregators = this.report.aggregators.get();
    if (!_.some(addedAggregators, { id: aggregator.id }) && addedAggregators.length < this.maxAggregators) {
      addedAggregators.push(aggregator);
    }
  }

  isAggregated(aggregator) {
    return _.some(this.report.aggregators.get(), { id: aggregator.id });
  }

  hideDropdown() {
    this.dropDownStyle.visibility = 'hidden';
    this.inputStyle.position = 'static';
  }

  showDropdown() {
    this.inputStyle.position = 'relative';
    this.dropDownStyle.visibility = 'visible'
  }


}

export default UalReportFormController;
