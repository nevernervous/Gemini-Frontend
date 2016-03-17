class LogoutModalController {
  /*@ngInject*/
  constructor($rootScope, close) {
    this.name = 'logoutModal';
    this._close = close;

    this._suscriptions = [];
    this._suscriptions.push($rootScope.$on('SESSION.LOGOUT', () =>  this._closemodal(true)));
    this._suscriptions.push($rootScope.$on('SESSION.EXPIRED', () => this._closemodal(true)));
  }

  _closemodal(response) {
      this._suscriptions.forEach(suscription => suscription());
      this._close(response);
  }

  ok() {
    this._closemodal(true);
  }
  cancel(){
    this._closemodal(false);
  }

}

export default LogoutModalController;
