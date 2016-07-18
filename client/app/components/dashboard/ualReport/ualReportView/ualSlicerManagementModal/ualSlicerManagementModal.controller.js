class ualSlicerManagementModalController {
  /*@ngInject*/
  constructor(
    $mdDialog) {
    this.name = 'ualSlicerManagementModal';
    this.slicers=[];
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
