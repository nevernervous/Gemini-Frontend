class ualSlicerManagementModalController {
  /*@ngInject*/
  constructor(
    $mdDialog,
    report) {
    this.name = 'ualSlicerManagementModal';
    this.slicers=[];
    // INTERNALS
    this.$mdDialog = $mdDialog;
    this.availableSlicers = report.slicers;
  }

  cancel() {
    this.$mdDialog.cancel();
  };
  ok() {
    this.$mdDialog.hide(this.slicers);
  };

}

export default ualSlicerManagementModalController;
