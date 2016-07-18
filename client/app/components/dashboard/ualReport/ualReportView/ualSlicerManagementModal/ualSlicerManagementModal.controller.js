class ualSlicerManagementModalController {
  /*@ngInject*/
  constructor(
    $mdDialog) {
    this.name = 'ualSlicerManagementModal';

    // INTERNALS
    this.$mdDialog = $mdDialog;
  }

  cancel() {
    this.$mdDialog.cancel();
  };
  ok() {
    this.$mdDialog.hide();
  };

}

export default ualSlicerManagementModalController;
