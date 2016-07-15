class UalReportViewController {
  /*@ngInject*/
  constructor(// INTERNALS
    // SERVICES
    Report,
    ) {
    // SERVICES
    this.services = {
      report: Report,
    };

    //STATE
    this.name = 'ualReportView';
    this.report = null;
    this.hidingDetails = false;
  }

  // INIT
  $onInit() {
    this.report = this.services.report.currentReport();
  }

  toggleDetails(){
    this.hidingDetails = !this.hidingDetails;
  }
}

export default UalReportViewController;
