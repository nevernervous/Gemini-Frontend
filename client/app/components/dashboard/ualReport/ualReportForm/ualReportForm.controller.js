class UalReportFormController {
  /*@ngInject*/
  constructor($state, ualVariables, Report, DataSource, ualReportNameModal, $rootScope, ualUnsafeReportModal, ualTooltipService) {
    this._state = $state;
    this._rootScope = $rootScope;

    // MODALS
    this._variablesmodal = ualVariables;
    this._ualReportNameModal = ualReportNameModal;
    this._ualUnsafeReportModal = ualUnsafeReportModal;

    // SERVICES
    this._service = {
      report: Report,
      tooltip: ualTooltipService
    };

    // STATE
    this._suscriptions = [];

    this.report = null;
    this.isSaving = false;

    this.name = {
      old: null,
      current: null,
      hover: false,
      focus: false,
      duplicated: false
    }
  }

  // NAME INPUT
  hoverName() {
    this.name.hover = true;
    if ( !this.name.focus ) {
      this._service.tooltip.show({
        container: 'report-name .ual-input',
        text: 'Change report name',
        position: 'right'
      });
    }
  }

  leaveName() {
    this.name.hover = false;
    this._service.tooltip.hide();
  }

  focusName() {
    this.name.focus = true;
    this._service.tooltip.hide();
  }

  blurName() {
    this.name.focus = false;
    if ( this.report.id && this.report.id.get() &&
         this.name.current.toLowerCase() != this.report.name.get().toLowerCase() ) {
      this.save();
    }
  }

  // SAVE
  save() {
    this.name.old = _.clone(this.report.name.get());
    this.report.name.set(_.clone(this.name.current));

    this.name.duplicated = false;
    this.isSaving = true;

    let responseError = [
      // NO ERROR
      (msg) => {},
      // ERROR: EMPTY NAME
      (msg) => {
        this._ualReportNameModal.open({ report: this.report, reportForm: this}).then(
          response => {
            if (response) saveSuccess(response);
          }
        );
      },
      // ERROR: DUPLICATED NAME
      (msg) => {
        this.name.current = this.name.old;
        this.name.duplicated = true;
      },
      // ERROR: SAVING
      (msg) => {
        this.name.current = this.name.old;
        this._rootScope.$broadcast('BANNER.SHOW', msg)
      }
    ];
    this.report.save().then(
      result => {
        this._rootScope.$broadcast('BANNER.SHOW', result.msg);
        this.name.current = _.clone(this.report.name.get());
        this._state.go("dashboard.report-edit", { "id": this.report.id.get() }, { notify: false });
        this.isSaving = false;
      },
      result => {
        responseError[result.code](result.msg);
        this.isSaving = false;
      }
    );
    return;
  }

  // INIT
  $onInit() {
    let reportId = this._state.params["id"];
    if (!reportId) {
      this.report = this._service.report.create();
    } else {
      this._service.report.getById(reportId)
      .then((reply) => {
        this.report = reply;
        this.name.current = _.clone(this.report.name.get());
        this.name.current = "Jeronimo";
      });
    }

    this._suscribe();
  }

  _suscribe() {
    this._suscriptions.push(this._rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
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

  // TO DEPRECATE

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

}

export default UalReportFormController;
