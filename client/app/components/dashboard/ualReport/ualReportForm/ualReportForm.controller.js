class UalReportFormController {
  /*@ngInject*/
  constructor($state, Aggregator, Report, DataSource, ualReportNameModal, $rootScope, ualUnsafeReportModal, ualTooltipService) {
    this._state = $state;
    this._rootScope = $rootScope;
    // MODALS
    this._ualReportNameModal = ualReportNameModal;
    this._ualUnsafeReportModal = ualUnsafeReportModal;

    // SERVICES
    this._service = {
      report: Report,
      datasource: DataSource,
      tooltip: ualTooltipService
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

  // INIT
  $onInit() {
    let reportId = this._state.params["id"];
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
              this._rootScope.$broadcast('BANNER.SHOW', response.msg);
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
        this._rootScope.$broadcast('BANNER.SHOW', msg);
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
      this._rootScope.$broadcast('BANNER.SHOW', msg);
      this.name.current = _.clone(this.report.name.get());
      if (!this.edit) {
        this.edit = true;
        this._state.go("dashboard.report-edit", {
          "id": this.report.id.get()
        }, {
            notify: false
          });
      }
    };
  }
  // INIT / SUSCRIPTIONS
  _suscribe() {
    this._suscriptions.push(this._rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
      if (this.report.touched() && (toState.name !== 'login')) {
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
