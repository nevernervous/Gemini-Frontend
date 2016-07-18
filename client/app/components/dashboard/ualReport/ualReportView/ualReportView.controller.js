class UalReportViewController {
  /*@ngInject*/
  constructor(
    // INTERNALS
    $state,
    // SERVICES
    Report
  ) {
    this.name = 'ualReportView';

    // INTERNALS
    this.$state = $state;

    // SERVICES
    this.services = {
      report: Report
    }

    // STATE
    this.loading = true;
  }

  // LIFECYCLE
  $onInit() {

    if ( this.$state.params["id"] ) {

    }

  }


}

export default UalReportViewController;
