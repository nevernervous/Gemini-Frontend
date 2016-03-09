class UalDataSourceChangeModalController {
  /*@ngInject*/
  constructor($rootScope, close, oldDataSource, newDataSource) {
    this._close = close;
    this.oldDataSource = oldDataSource;
    this.newDataSource = newDataSource;

    this._suscriptions = [];
    this._suscriptions.push($rootScope.$on('SESSION.LOGOUT', () =>  this._closemodal(true)));
  }

  _closemodal(response) {
    this._suscriptions.forEach(suscription => suscription());
    this._close(response);
  }

  cancel(){
    this._closemodal(false);
  }
  change(){
    this._closemodal(true);
  }
}

export default UalDataSourceChangeModalController;
