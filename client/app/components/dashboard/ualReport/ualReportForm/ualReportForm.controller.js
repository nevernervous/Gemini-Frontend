class UalReportFormController {
  /*@ngInject*/
  constructor($state, ualVariables, Aggregator, Report, DataSource, ualReportNameModal, $scope, $rootScope, ualUnsafeReportModal) {
    this._state = $state;
    this._variablesmodal = ualVariables;
    this.maxAggregators = 10;
    this._scope = $scope;
    this._rootScope = $rootScope;
    this._suscriptions = [];
    this._service = {
      aggregator: Aggregator
      , report: Report
      , datasource: DataSource
    };
    this.selectedDataSource = {};

    this.dropDownStyle = {};
    this.inputStyle = {};
    this.report = null;

    this.isSaving = false;
    this.reportName = null;

    this.duplicatedName = false;
    this._ualReportNameModal = ualReportNameModal;
    this._ualUnsafeReportModal = ualUnsafeReportModal;
  }


  $onInit() {
    let reportId = this._state.params["id"];
    if (!reportId) {
      this.report = this._service.report.create();
<<<<<<< HEAD
=======
      // this.selectDataSource();
>>>>>>> 6fcd04ea66f757d9df531b504c0a162a669e1f09
    } else {
      this.openReport(reportId);
    }

    this._suscriptions.push(this._scope.$on('UALMODAL.OPEN', () => this.hideDropdown()));
    this._suscriptions.push(this._scope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
      if (this.report.touched()) {
        event.preventDefault();
        this._ualUnsafeReportModal.open().then(response => {
          if (response) {
            this.report = null;
            $(window).unbind("beforeunload", this.beforeClose);
            this._unsuscribe();
            this._state.go(toState.name);
          }
        });
      } else {
        $(window).unbind("beforeunload", this.beforeClose);
        this._unsuscribe();
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
        this.report = reply;
        this.reportName = _.clone(this.report.name.get());
        let datasource = this.report.datasource.get();
        return this._service.aggregator.groups(datasource);
      })
      .then((replyAggregators) => {

        this.aggregators = replyAggregators.data;
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

  reportNameChanged() {
    let _reportName = this.report.name.get() ? this.report.name.get() : "";
    let _formName = this.reportName ? this.reportName : "";
    return _reportName.toLowerCase() != _formName.toLowerCase();
  }

  saveReport() {
    let oldName = _.clone(this.report.name.get());
    this.report.name.set(_.clone(this.reportName));



    this.duplicatedName = false;
    this.isSaving = true;
    let saveSuccess = (msg) => {
      this._rootScope.$broadcast('BANNER.SHOW', msg);
      this.duplicatedName = false;
      this.reportName = _.clone(this.report.name.get());
      this._state.go("dashboard.report-edit", {
        "id": this.report.reportId.get()
      }, {
        notify: false
      });
      this.isSaving = false;
    }
    let responseError = [
      (msg) => {}
      , (msg) => {
        this._ualReportNameModal.open({
          report: this.report
          , reportForm: this
        }).then(
          response => {
            if (response) saveSuccess(response);
          }
        );
      }
      , (msg) => {
        this.reportName = oldName;
        this.duplicatedName = true;
      }
      , (msg) => {
        this.reportName = oldName;
        this._rootScope.$broadcast('BANNER.SHOW', msg)
      }
    ];
    this.report.save().then(
      result => {
        saveSuccess(result.msg);
      }
      , result => {
        responseError[result.code](result.msg);
        this.isSaving = false;
      }
    );
    return;
  }
}

export default UalReportFormController;
