class DashboardController {
  /*@ngInject*/
  constructor($rootScope, $state, ualMainMenu, Session, expirationModal) {
    this.name = 'dashboard';
    this._rootScope = $rootScope;
    this._state = $state;
    this.mainMenu = ualMainMenu;
    this._session = Session;
    this._expirationModal = expirationModal;
    this._suscriptions = [];
    this.msgText="";
    this.msgClass="";
    this.messageDisplayed2=false;


  }

  expiration() {
    if ( this._session.isLogged() ) {
      this._expirationModal.open()
      .then( response => response ? this._session.renew() : this._session.logout() );
    } else {
      this._session.logout();
    }
  }

  _unsuscribe() {
    this._suscriptions.forEach(suscription => suscription());
  }

  $onInit() {
    this._suscriptions.push(this._rootScope.$on('SESSION.EXPIRING', () => this.expiration()));
    this._suscriptions.push(this._rootScope.$on('SESSION.EXPIRED', () =>  {
      this._unsuscribe();
      this._state.go('login');
    }));
    this._suscriptions.push(this._rootScope.$on('SESSION.LOGOUT', () =>  {
      this._unsuscribe();
      this._state.go('login');
    }));
    this._suscriptions.push(this._rootScope.$on('BANNER.SHOW', (event, data) => this.showMe(data)));
    this._suscriptions.push(this._rootScope.$on('BANNER.HIDE', () => this.hideMe()));
  }

  showMe(data) {
    if(data){
      if(data.saveResult==null){
        hideMe();
        return;
      }
      this.msgClass=data.saveResult.msgClass;
      this.msgClass['banner-hide']=false;
      if(!this.msgClass['-autoclose'])//no autoclose
      {
        this.msgClass['banner-show']=true;
      }
      this.msgText=data.saveResult.msgText;
      this.messageDisplayed = true;
    }
  }

  hideMe() {
    this.messageDisplayed = false;
    this.msgClass['banner-hide']=true;
    this.msgClass['banner-show']=false;
  }


}

export default DashboardController;
