class UalReportFormController {
  /*@ngInject*/
  constructor($window, $state, ualReport, ualDataSource, ualVariables, Aggregator, Report, DataSource, ualReportNameModal, $scope,$rootScope, ualUnsafeReportModal, $q) {
    this._state = $state;
    this._window = $window;
    this._datasourcemodal = ualDataSource;
    this._variablesmodal = ualVariables;
    this.maxAggregators = 10;
    this._q = $q;

    this._scope = $scope;
    this._rootScope=$rootScope;
    this._suscriptions = [];

    this._service = {
      aggregator: Aggregator,
      report: Report,
      datasource: DataSource
    };


    this.dropDownStyle = {};
    this.inputStyle = {};

    this.report = ualReport;

    //this.messageDisplayed = false;

    this.saveResult = null;

    this.saveResultMessages = [
      { type: "-success", text : "Report saved successfully."},
      { type: "-error", text : "Report name already exists. Please select another."},
      { type: "-error", text : "The report was not saved due to an unexpected error. Please try again or contact the Gemini administrator."}
    ];

    this.duplicatedErrorResponse = "Report name already exists. Please select another.";
    this.duplicatedName = false;

    this._ualReportNameModal = ualReportNameModal;
    this._ualUnsafeReportModal = ualUnsafeReportModal;

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

    this._suscriptions.push(this._scope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
      if (!this.report.exitConfirmed.get() && this.report.touched() && !toState.url.match(/\/login/)) {
        event.preventDefault();
        let _report = this.report;
        let _state = this._state;
        this._ualUnsafeReportModal.open().then(response => {
          if (response) {
            _report.exitConfirmed.set(true);
            _state.go(toState.name);
          }
        });
      } else {
        this.report.exitConfirmed.set(false);
        $(window).unbind("beforeunload", this.beforeClose);
        this._unsuscribe()
      }
    }));

    this.beforeClose = function (event) {
      event.originalEvent.returnValue = "Exit without saving?";
      return "Exit without saving?";
    };
    $(window).bind('beforeunload', this.beforeClose);

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
          return { id: matcher.id }
        });

        let selectedVariables = this.intersectWith(variables.items, reportData.variables, (matcher) => {
          return { id: matcher.id };
        });


        this.aggregators = aggregators;
        this.report.name.set(reportData.name);
        this.report.reportId.set(reportData.id);
        this.report.datasource.set(reportData.datasource);
        this.report.aggregators.set(selectedAggregators);
        this.report.variables.set(selectedVariables);
        this.report.untouch();

        this.reportLoaded = true;
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

  isDuplicatedName(){
    return this.duplicatedName && (!!this.report.nameDuplicated.get() && this.report.nameDuplicated.get() == this.report.name.get());
  }

  saveReport(){
      let report = this.report;
      let form = this;
      if(!report.name.get() && !report.reportId.get()){
          this._ualReportNameModal.open({
              report: this.report,
              reportForm: this,
          }).then(
              function(result){
                  if(result) form._state.go("dashboard.report-edit",{"id":report.reportId.get()},{notify:false});
              }
          );
          return ;
      }

      if(!this.report.touched()){
        return;
      }

      //this.messageDisplayed = false;
      //this.saveResult = this.saveResultMessages.get(null);

      this._service.report.save(report).then(
          function(response){
              //form.saveResult = form.saveResultMessages.has(0)? form.saveResultMessages.get(0) : form.saveResultMessages.get(null);

              report.reportId.set(response.data.id);
              //form.messageDisplayed = true;
              form._rootScope.$broadcast('BANNER.SHOW', form.saveResultMessages[0]);
              form.duplicatedName = false;

              form.isNewReport = false;
              form.reportLoaded = true;

              report.untouch();
              form._state.go("dashboard.report-edit",{"id":report.reportId.get()},{notify:false});
//                form.initialReportHash = report.hash();
          },
          function(response){
              //UNEXPECTED ERROR
              if(!response.data || !response.data.errorMessages){
                  //form.saveResult = form.saveResultMessages.has(2)? form.saveResultMessages.get(2) : form.saveResultMessages.get(null);
                  form._rootScope.$broadcast('BANNER.SHOW',form.saveResultMessages[2]);
              }else if(response.data.errorMessages.indexOf(form.duplicatedErrorResponse) < 0){
              //EXPECTED ERROR
                  form._rootScope.$broadcast('BANNER.SHOW', {type: '-error', text: response.data.errorMessage});
              }else{
              //DUPLICATED NAME
                  form.report.nameDuplicated.set(_.clone(form.report.name.get()));
                  form.duplicatedName = true;
              }
          }
      ).catch(function(){
          form._rootScope.$broadcast('BANNER.SHOW',form.saveResultMessages[2]);
      }).finally( () => {report.saving.setSaving(false);} );
  }
}

export default UalReportFormController;
