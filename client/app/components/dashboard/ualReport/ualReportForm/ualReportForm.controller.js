
// TODO: [IMPROVEMENT] On Change to Variables, scroll to
class UalReportFormController {
  /*@ngInject*/
  constructor(
    // INTERNALS
    $state,
    $scope,
    $rootScope,
    $timeout,
    $q,
    // SERVICES
    Report,
    DataSource,
    // COMPONENTS
    ualDialog,
    ualReportNameModal,
    ualTimerModal) {

    // INTERNALS
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.$q = $q;

    // SERVICES
    this.services = {
      report: Report,
      datasource: DataSource
    };

    // COMPONENTS
    this.components = {
      dialog: ualDialog
    }

    // MODALS
    this._ualReportNameModal = ualReportNameModal;
    this._ualTimerModal = ualTimerModal;

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

  // LIFECYCLE
  $onInit() {
    let reportId = this.$state.params["id"];
    this.edit = !!reportId;
    const promise = this.edit ? this.services.report.getById(reportId) :
                                this.services.report.currentReport();

    this.$q.when(promise).then(
      response => {
        this.report = response;
        this.name.current = _.clone(this.report.name.get());
      }
    );

    this._responses();
    this._suscribe();
  }
  $postLink() {
    this.$scope.$watch((scope) => {
      return scope.reportForm && scope.reportForm.$valid;
    }, (newValue, oldValue) => {
      this.report.setValidForm(newValue);
    });
  }


  // TODO: Refacto Error Handlers
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
        this.$state.go("dashboard.report-form", {
          "id": this.report.id.get()
        }, { notify: false });
      }
    };
  }


  // NAME INPUT
  hoverName() {
    this.name.hover = true;
    if (!this.name.focus) {
      // this.services.tooltip.show({
      //   container: 'report-name .ual-input',
      //   text: 'Change report name',
      //   position: 'right'
      // });
    }
  }

  leaveName() {
    this.name.hover = false;
    // this.services.tooltip.hide();
  }

  focusName() {
    this.name.focus = true;
    // this.services.tooltip.hide();
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


  runReport(form) {
    this.$scope.$broadcast('REPORT.EXECUTE');
    const isValid = this.report.isValid();
    if (isValid) {
      this.$state.go('dashboard.report-view');
    } else {
      _.forEach(form.$error, (errorType) => {
        _.forEach(errorType, (item) => {
          item.$setDirty();
        });
      });
      this.focusFirstError();
    }
  }

  focusFirstError() {
    this.$timeout(() => {
      this.selectedTab = 'report-filters';
      let firstError = $('.ng-invalid:not(ng-form):first', "ual-filters").find("input");
      if (firstError.length > 0) {
        angular.element($('ual-filters')).scrollTo(firstError, 20, 0.5);
        firstError.focus();
      }
    }, 0)
  }

  enableRun() {
    return (this.report) &&
      (this.report.datasource.get()) &&
      (this.report.variables.hasValues() || this.report.aggregators.hasValues());
  }
  // INIT / SUSCRIPTIONS
  _suscribe() {
    this._suscriptions.push(this.$rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
      if (this.report.touched() && toState.name !== 'login' && toState.name !== 'dashboard.report-view') {
        event.preventDefault();
        this.components.dialog.confirm( 'Exit without saving?' )
        .then(() => {
          this.report.clean();
          this.report = null;
          $(window).unbind("beforeunload", this.beforeClose);
          this._unsuscribe();
          this.$state.go(toState.name);
        });
      } else {
        if(this.report && toState.name !== 'dashboard.report-view'){
          this.report.clean();
          this.report = null;
        }
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
