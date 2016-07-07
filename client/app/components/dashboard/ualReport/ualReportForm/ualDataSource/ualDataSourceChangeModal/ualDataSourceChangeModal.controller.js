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

// class UalDataSourceChangeModalController {
//   /*@ngInject*/
//   constructor($rootScope, close, oldDataSource, newDataSource) {
//     this.name = 'ualDataSourceChangeModal';
//     this._close = close;
//     this.oldDataSource = oldDataSource;
//     this.newDataSource = newDataSource;
//
//     this._suscriptions = [];
//     this._suscriptions.push($rootScope.$on('SESSION.LOGOUT', () =>  this._closemodal(true)));
//     this._suscriptions.push($rootScope.$on('SESSION.EXPIRED', () => this._closemodal(true)));
//   }
//
//   _closemodal(response) {
//     this._suscriptions.forEach(suscription => suscription());
//     this._close(response);
//   }
//
//   cancel(){
//     this._closemodal(false);
//   }
//   change(){
//     this._closemodal(true);
//   }
// }
