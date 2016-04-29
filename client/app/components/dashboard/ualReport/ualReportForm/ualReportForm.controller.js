class UalReportFormController {
  /*@ngInject*/
  constructor($window, $state, ualDataSource, ualVariables, Aggregator, Report, DataSource, ualReportNameModal, $scope, $rootScope, ualUnsafeReportModal, $q) {
    this._state = $state;
    this._window = $window;
    this._datasourcemodal = ualDataSource;
    this._variablesmodal = ualVariables;
    this.maxAggregators = 10;
    this._q = $q;
    this._scope = $scope;
    this._rootScope = $rootScope;
    this._suscriptions = [];
    this._service = {
      aggregator: Aggregator
      , report: Report
      , datasource: DataSource
    };
    this.dropDownStyle = {};
    this.inputStyle = {};
    this.report = Report.create();
//    this.messageDisplayed = false;
    this.saveResult = null;
    this.saveResultMessages = new Map();
    this.saveResultMessages.set(null, {
      msgClass: {}
      , msgText: ""
    });
    this.saveResultMessages.set(0, {
      msgClass: {
        "-success": true
        , "-autoclose": true
      }
      , msgText: "Report saved successfully."
    });
    this.saveResultMessages.set(1, {
      msgClass: {
        "-error": true
        , "-closeable": true
      }
      , msgText: "Report name already exists. Please select another."
    });
    this.saveResultMessages.set(2, {
      msgClass: {
        "-error": true
        , "-closeable": true
      }
      , msgText: "The report was not saved due to an unexpected error. Please try again or contact the Gemini administrator."
    });
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
          return false;
        }
        result.push(item);
        return true;
      });
    });
    return result;
  }

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
        datasource: this.report.datasource.get()
        , selecteds: this.report.variables.get()
      })
      .then(variables => this.report.variables.set(variables));
  }

  openReport(reportId) {
    this._service.report.getById(reportId)
      .then((reply) => {
        let datasource = this.report.datasource.get();
        return this._q.all([
      this._service.aggregator.groups(datasource)




          , this._service.datasource.variables(datasource)

    ]);
      })
      .spread((replyAggregators, replyVariables) => {

        this.aggregators = replyAggregators.data;
        this.reportLoaded = true;
      });
  }

  addAggregator(aggregator) {
    let addedAggregators = this.report.aggregators.get();
    if (!_.some(addedAggregators, {
        id: aggregator.id
      }) && addedAggregators.length < this.maxAggregators) {
      addedAggregators.push(aggregator);
    }
  }

  isAggregated(aggregator) {
    return _.some(this.report.aggregators.get(), {
      id: aggregator.id
    });
  }

  hideDropdown() {
    this.dropDownStyle.visibility = 'hidden';
    this.inputStyle.position = 'static';
  }

  showDropdown() {
    this.inputStyle.position = 'relative';
    this.dropDownStyle.visibility = 'visible'
  }

  isDuplicatedName() {
    return this.duplicatedName && (!!this.report.nameDuplicated.get() && this.report.nameDuplicated.get() == this.report.name.get());
  }


  saveReport() {
    let saveSuccess = () => {
      this.saveResult = this.saveResultMessages.has(0) ? this.saveResultMessages.get(0) : this.saveResultMessages.get(null);
//      this.messageDisplayed = true;
      this._rootScope.$broadcast('BANNER.SHOW', this.saveResult);
      this.duplicatedName = false;
      this.isNewReport = false;
      this.reportLoaded = true;
      this._state.go("dashboard.report-edit", {
        "id": this.report.reportId.get()
      }, {
        notify: false
      });
    }
    let responseError = {
      0: (msg) => {}
      , 1: (msg) => {
        this._ualReportNameModal.open({
          report: this.report
          , reportForm: this
        }).then(
          response => {
            if (response) saveSuccess();
          }
        );
      }
      , 2: (msg) => {
        this.report.nameDuplicated.set(_.clone(this.report.name.get()));
        this.duplicatedName = true;
//        this.messageDisplayed = false;
      }
      , 3: (msg) => {
        this.saveResult = this.saveResultMessages.has(2) ? JSON.parse(JSON.stringify(this.saveResultMessages.get(2))) : this.saveResultMessages.get(null);
        if (msg) this.saveResult.msgText = msg;
        this._rootScope.$broadcast('BANNER.SHOW', this.saveResult);
        this.messageDisplayed = true;
      }
    };
//    this.messageDisplayed = false;
//    this.saveResult = this.saveResultMessages.get(null);
    this.report.save().then(
      saveSuccess
      , result => {
        responseError[result.code](result.msg);
      }
    );
    return;
  }
}

export default UalReportFormController;
