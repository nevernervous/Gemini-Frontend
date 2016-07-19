class UalReportViewController {
  /*@ngInject*/
  constructor(
    // COMPONENTS
    ualSlicerManagementModal,
    // INTERNALS
    $state,
    // SERVICES
    Report
    ) {
    this.name = 'ualReportView';

    // MODALS
    this._ualSlicerManagementModal=ualSlicerManagementModal;

    // INTERNALS
    this.$state = $state;

    // SERVICES
    this.services = {
      report: Report,
    };

    //STATE
    this.loading = true;
    this.report = null;
    this.hidingDetails = false;
    this.rowsNumber = 0;
    this.generatedOn = null;
    this.timeElipsed = null;
  }

  // INIT
  $onInit() {
    this.report = this.services.report.currentReport();
    if(!this.report.isInit()) this.report = this.services.report.create();
    this.generatedOn = new Date();
    this.timeElipsed = "hh:mm:ss";
  }

  toggleDetails(){
    this.hidingDetails = !this.hidingDetails;
  }

  addToSlicers(){
    this._ualSlicerManagementModal.open({
      report: this.report
    }).then(
      response => {
        console.log(response)
      }
    );
  }


}

export default UalReportViewController;
