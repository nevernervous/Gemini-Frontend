class UalReportFormController {
    /*@ngInject*/
    constructor($window, $state, ualReport, ualDataSource, ualVariables, Aggregator, Report, $timeout, ualReportNameModal, $scope, ualUnsafeReportModal ) {
        this._state = $state;
        this._window = $window;
        this._datasourcemodal = ualDataSource;
        this._variablesmodal = ualVariables;
        this.maxAggregators = 10;

        this._scope = $scope;
        this._suscriptions = [];
        
        this._service = {
            aggregator: Aggregator,
            report: Report,
        };
        
        
        this.dropDownStyle = {};
        this.inputStyle = {};

        this.report = ualReport;
        
        this.messageDisplayed = false;
        
        this.saveResult = null;
        
        this.saveResultMessages = new Map();
        this.saveResultMessages.set(null,{msgClass: {}, msgText : ""});
        this.saveResultMessages.set(0,{msgClass: {"-success": true}, msgText : "Report saved successfully."});
        this.saveResultMessages.set(1,{msgClass: {"-error": true}, msgText : "Report name already exists. Please select another." });
        this.saveResultMessages.set(2,{msgClass: {"-error": true}, msgText : "The report was not saved due to an unexpected error. Please try again or contact the Gemini administrator."});
        
        this.duplicatedErrorResponse = "There is already a report with the same name";
        this.duplicatedName = false;
        
        this._ualReportNameModal = ualReportNameModal;
        this._ualUnsafeReportModal = ualUnsafeReportModal;
        
    }

  $onInit() {
    this.report.create();
    this.selectDataSource();

    this._suscriptions.push(this._scope.$on('UALMODAL.OPEN', () => this.hideDropdown()));

    this._suscriptions.push(this._scope.$on('$stateChangeStart', ( event, toState, toParams, fromState, fromParams ) => {
        if(!this.report.exitConfirmed.get() && this.report.touched()){
            event.preventDefault();
            let _report = this.report;
            let _state = this._state;
            this._ualUnsafeReportModal.open({}).then(
                function(response){
                    if(response){
                        _report.exitConfirmed.set(true);
                        _state.go(toState.name);
                    }
                }
            );
        }else{
            this.report.exitConfirmed.set(false);
            $( window ).unbind( "beforeunload", this.beforeClose);
            this._unsuscribe()
        }
    }));

    this.beforeClose =function(event) {
        event.originalEvent.returnValue="Exit without saving?";
        return "Exit without saving?";
    };
    $(window).bind('beforeunload', this.beforeClose );
    
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

    saveReport(){
        let report = this.report;
        let form = this;
        if(!report.name.get()){
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
        this._service.report.save(report).then(
            function(response){
                form.saveResult = form.saveResultMessages.has(0)? form.saveResultMessages.get(0) : form.saveResultMessages.get(null);
                report.reportId.set(response.data.reportId);
                form.messageDisplayed = true;
                report.untouch();
                form._state.go("dashboard.report-edit",{"id":report.reportId.get()},{notify:false});
//                form.initialReportHash = report.hash();
            },
            function(response){
                if(response.data.indexOf(form.duplicatedErrorResponse) < 0){ 
                    form.saveResult = form.saveResultMessages.has(1)? form.saveResultMessages.get(1) : form.saveResultMessages.get(null);
                    form.messageDisplayed = true;
                }else{ 
                    form.duplicatedName = true;
                    form.messageDisplayed = false;
                }
            }
        ).catch(function(){
            form.saveResult = form.saveResultMessages.has(2)? form.saveResultMessages.get(2) : form.saveResultMessages.get(null);
            form.messageDisplayed = true;
        });
    }
}

export default UalReportFormController;
