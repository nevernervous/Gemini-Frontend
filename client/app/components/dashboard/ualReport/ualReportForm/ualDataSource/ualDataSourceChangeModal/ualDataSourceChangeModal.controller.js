class UalDataSourceChangeModalController {
  /*@ngInject*/
  constructor(
    // SERVICES
    $mdDialog,
    // LOCALS
    datasource) {
    this.name = 'ualDataSourceChangeModal';

    // INTERNALS
    this.$mdDialog = $mdDialog;

    // LOCALS
    this.datasource = datasource;
  }

  no() {
    this.$mdDialog.cancel();
  };
  yes() {
    this.$mdDialog.hide();
  };

}

export default UalDataSourceChangeModalController;
