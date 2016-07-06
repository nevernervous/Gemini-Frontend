class UalReportFormController {
  /*@ngInject*/
  constructor(
    // INTERNALS
    $state,
    $scope,
    $rootScope,
    $timeout,
    // SERVICES
    Aggregator,
    Report,
    DataSource,
    // COMPONENTS
    ualReportNameModal,
    ualTimerModal,
    ualExecutedReportModal) {

    // INTERNALS
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$timeout = $timeout;

    // MODALS
    this._ualReportNameModal = ualReportNameModal;
    this._ualTimerModal = ualTimerModal;
    this._executedReportModal = ualExecutedReportModal;

    // SERVICES
    this._service = {
      report: Report,
      datasource: DataSource
      //tooltip: ualTooltipService
    };

    this.dropDownStyle = {};

    // STATE
    this.edit = false;
    this._suscriptions = [];

    this.report = null;
    this.isSaving = false;

    this.name = {
      current: null,
      hover: false,
      focus: false,
      duplicated: false
    }
    this.selectedItem;

    this.response = {
      success: null,
      error: null
    };

    this.selectedTab = 'report-datasource';

  }

  // NAME INPUT
  hoverName() {
    this.name.hover = true;
    if (!this.name.focus) {
      // this._service.tooltip.show({
      //   container: 'report-name .ual-input',
      //   text: 'Change report name',
      //   position: 'right'
      // });
    }
  }

  leaveName() {
    this.name.hover = false;
    // this._service.tooltip.hide();
  }

  focusName() {
    this.name.focus = true;
    // this._service.tooltip.hide();
  }

  saveName() {
    this.name.focus = false;
    if (this.edit && this.name.current.toLowerCase() != this.report.name.get().toLowerCase()) {
      this.save();
    } else if (!this.edit) {
      this.report.name.set(_.clone(this.name.current));
    }
  }

  // SAVE
  save() {
    this.report.name.set(_.clone(this.name.current));

    this.isSaving = true;

    this.report.save().then(
      result => {
        this.response.success(result.msg);
        this.isSaving = false;
      },
      result => {
        this.response.error(result.code, result.msg);
        this.isSaving = false;
      }
    );
    return;
  }

  $postLink() {
    this.$scope.$watch((scope) => {
      return scope.reportForm.$valid;
    }, (newValue, oldValue) => {
      this.report.setValidForm(newValue);
    });
  }

  // INIT
  $onInit() {
    let reportId = this.$state.params["id"];
    if (!reportId) {
      this.report = this._service.report.create();
    } else {
      this.edit = true;
      this._service.report.getById(reportId)
        .then((reply) => {
          this.report = reply;
          this.name.current = _.clone(this.report.name.get());
        });
    }
    this._responses();
    this._suscribe();

  }
  // INIT / RESPONSES
  _responses() {
    let error_actions = [
      // ON ERROR: NO ERROR
      (msg) => { },
      // ON ERROR: EMPTY NAME
      (msg) => {
        this._ualReportNameModal.open({
          report: this.report
        }).then(
          response => {
            if (response.status === 'success') {
              this.report.name.set(response.name);
              this.response.success(response.msg);
            } else if (response.status === 'error') {
              this.report.name.set(response.name);
              this.$rootScope.$broadcast('BANNER.SHOW', response.msg);
            }
          }
          );
      },
      // ON ERROR: DUPLICATED NAME
      (msg) => {
        this.name.duplicated = true;
      },
      // ON ERROR: SAVING
      (msg) => {
        this.$rootScope.$broadcast('BANNER.SHOW', msg);
      }
    ];

    // ON ERROR
    this.response.error = (code, msg) => {
      this.name.duplicated = false;
      error_actions[code](msg);
    }

    // ON SUCCESS
    this.response.success = (msg) => {
      this.name.duplicated = false;
      this.$rootScope.$broadcast('BANNER.SHOW', msg);
      this.name.current = _.clone(this.report.name.get());
      if (!this.edit) {
        this.edit = true;
        this.$state.go("dashboard.report-edit", {
          "id": this.report.id.get()
        }, {
            notify: false
          });
      }
    };
  }

  runReport(form) {
    this.$scope.$broadcast('REPORT.EXECUTE');
    this.$timeout(() => {
      let isValid = this.report.isValid();
      if (isValid) {
        this._ualTimerModal.open(this.report).then((reply) => {
          if (!!reply) {
            this._executedReportModal.open();
          }
        });
      } else {
        _.forEach(form.$error, (errorType) => {
          _.forEach(errorType, (item) => {
            item.$setDirty();
          });
        });
        this.selectedTab = 'report-filters';
        let firstError = $('.ng-invalid:not(ng-form):first', "ual-filters").find("input");
        if (firstError.length > 0) {
          angular.element($('ual-filters')).scrollTo(firstError, 20, 0.5);
          firstError.focus();
        }
      }
    }, 0);
  }

  enableRun() {
    return !!this.report.datasource.get() && (this.report.variables.hasValues() || this.report.aggregators.hasValues());
  }
  // INIT / SUSCRIPTIONS
  _suscribe() {
    this._suscriptions.push(this.$rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
      if (this.report.touched() && (toState.name !== 'login')) {
        event.preventDefault();
        this.components.dialog.confirm( 'Exit without saving?' )
        .then(() => {
          this.report = null;
          $(window).unbind("beforeunload", this.beforeClose);
          this._unsuscribe();
          this.$state.go(toState.name);
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
  hasVariables() {
    return this.report && (this.report.variables.hasValues() || this.report.filters.hasValues() || this.report.aggregators.hasValues());
  }
  // UNLOAD
  _unsuscribe() {
    this._suscriptions.forEach(suscription => suscription());
  }

  onChangeDataSource() {
    this.selectedTab = 'report-variables';
  }

  collapseAccordion(index) {
    this.selectedTab = index;
  }

}

export default UalReportFormController;
