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

    this.rowsNumber = 0;
    this.generatedOn = null;
    this.timeElipsed = null;
  }

  // INIT
  $onInit() {
    this.report = this.services.report.currentReport();
    console.log(!this.report.isInit());
    if(!this.report.isInit()) this.report = this.services.report.create();
    this.generatedOn = new Date();
    this.timeElipsed = "hh:mm:ss";
  }

  toggleDetails(){
    this.hidingDetails = !this.hidingDetails;
  }
}

export default UalReportViewController;
