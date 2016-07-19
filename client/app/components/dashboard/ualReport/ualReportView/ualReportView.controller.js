class UalReportViewController {
  /*@ngInject*/

  // TODO: [FIX] Get Report from ID
  constructor(
    // INTERNALS
    $state,
    $window,
    // SERVICES
    Report,
    // COMPONENTS
    ualTimerModal
    ) {
    this.name = 'ualReportView';

    // INTERNALS
    this.$state = $state;
    this.$window = $window;

    // COMPONENTS
    this.components = {
      timer: ualTimerModal
    }

    //STATE
    this.report = Report.currentReport();
    this.table = null;
    this.slicers = null;
    this.hidingDetails = false;
    this.generatedOn = new Date();
    this.timeElapsed = 0;
  }

  // INIT
  $onInit() {
    let reportId = this.$state.params["id"];
    this.components.timer.open(reportId)
    .then(
      reponse => {
        this.timeElapsed = reponse.timeElapsed;
        this.table = reponse.data.data;
        this.slicers = reponse.data.slicers;
      },
      () => this.$window.history.back()
    );
  }

  toggleDetails(){
    this.hidingDetails = !this.hidingDetails;
  }

}

export default UalReportViewController;
