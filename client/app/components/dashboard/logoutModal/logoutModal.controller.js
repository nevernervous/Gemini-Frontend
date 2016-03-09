class LogoutModalController {
  /*@ngInject*/
  constructor($rootScope, close) {
    this.name = 'logoutModal';
    this._close = close;

    this._suscriptions = [];
    this._suscriptions.push($rootScope.$on('SESSION.LOGOUT', () =>  {
      this._unsuscribe();
      this._close(true);
    }));
  }

  _unsuscribe() {
    this._suscriptions.forEach(suscription => suscription());
  }

  ok() {
    this._close(true);
  }
  cancel(){
    this._close(false);
  }

}

export default LogoutModalController;
