class UalReportViewController {
  /*@ngInject*/
  constructor(
    // COMPONENTS
    ualSlicerManagementModal,
    // INTERNALS
    $state,
    $window,
    // SERVICES
    Report,
    // COMPONENTS
    ualTimerModal
    ) {
    this.name = 'ualReportView';

    // MODALS
    this._ualSlicerManagementModal=ualSlicerManagementModal;

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
