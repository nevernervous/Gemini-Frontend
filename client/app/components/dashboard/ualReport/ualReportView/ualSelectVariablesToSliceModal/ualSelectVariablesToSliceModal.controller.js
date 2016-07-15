class ualSelectVariablesToSliceModalController {
  /*@ngInject*/
  constructor(
    $mdDialog,
    Token) {
    this.name = 'ualSelectVariablesToSliceModal';

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

export default ualSelectVariablesToSliceModalController;
