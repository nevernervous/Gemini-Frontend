class ualTimerModalController {
  /*@ngInject*/
  constructor(
    // INTERNALS
    $q,
    // SERVICES
    Report,
    ExecuteReport,
    // COMPONENTS
    $mdDialog,
    // LOCALS
    id) {
    this.name = 'ualTimerModal';

    // INTERNALS
    this.$q = $q;

    // SERVICES
    this.services = {
      report: Report,
      execute: ExecuteReport
    }

    // COMPONENTS
    this.components = {
      dialog: $mdDialog
    }

    // STATE
    this.request = null;
    this.report = null;
    this.startTime = new Date();

    // INIT
    this.onInit(id);
  }

  onInit(id) {
    const promise = id ? this.services.report.getById(id) : this.services.report.currentReport();
    this.$q.when(promise).then(
      response => {
        if ( response.isValid() ) {
          this.report = response;
          this.request = this.services.execute.run(this.report);
          this.request.promise.then(
            response => {
              const reply = {
                timeElapsed: this.timer(),
                data: response
              };

              this.components.dialog.hide(reply);
            },
            () => this.components.dialog.cancel()
          );
        } else {
          this.components.dialog.cancel()
        }
      });
  }

  timer() {
    let now = +(Date.now());
    return now - (+this.startTime);
  }

  cancel() {
    this.request.cancel();
  };

}

export default ualTimerModalController;
