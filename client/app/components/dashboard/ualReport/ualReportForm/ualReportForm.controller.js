class UalReportFormController {
    /*@ngInject*/
    constructor($state, ualReport, ualDataSource, ualVariables, Aggregator, Report, $timeout, ualReportNameModal, $scope ) {
        this._state = $state;
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
        this.saveResultMessage = {type: "-success",icon:"ion-ios-close-outline",text:"Falló"};
        
        this.duplicatedErrorResponse = "There is already a report with the same name";
        this.duplicatedName = false;
        
        this._ualReportNameModal = ualReportNameModal;
    
    }

  $onInit() {
    this.report.create();
    this.selectDataSource();

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

    setMesage(code = -1){
        switch(code){
            case 0: 
                this.saveResultMessage = {type: "-success",icon:"ion-ios-checkmark-outline",text:"Report saved successfully."};
                break;
            case 1: 
                this.saveResultMessage = {type: "-error",icon:"ion-ios-close-outline",text:"Report name already exists. Please select another."};
                break;
            default:
                this.saveResultMessage = {type: "-error",icon:"ion-ios-close-outline",text:"The report was not saved due to an unexpected error. Please try again or contact the Gemini administrator."};
                break;
        }
    }
    saveReport(){
        let report = this.report;
        let form = this;
        if(!report.name.get()){
            this._ualReportNameModal.open({
                report: this.report,
                reportForm: this,
            });
            return ;
        }
        this._service.report.save(report).then(
            function(response){
                form.setMesage(0);
                report.reportId.set(response.data.reportId);
                form.messageDisplayed = true;
                report.untouch();
                form._state.go("dashboard.report-edit",{"id":report.reportId.get()},{notify:false});
//                form.initialReportHash = report.hash();
            },
            function(response){
                if(response.data.indexOf(form.duplicatedErrorResponse) < 0){ 
                    form.setMesage(1);
                    form.messageDisplayed = true;
                }else{ 
                    form.duplicatedName = true;
                    form.messageDisplayed = false;
                    //form.setMesage();
                }
            }
        ).catch(function(){
            form.setMesage();
            form.messageDisplayed = true;
        }).finally(function(){
//            console.log("hola mundo");
//            $apply();
        });
    }
}

export default UalReportFormController;
