class DashboardController {
  /*@ngInject*/
  constructor($rootScope, $state, ualMainMenu, Session, expirationModal,$scope,$timeout) {
    this.name = 'dashboard';
    this._rootScope = $rootScope;
    this._state = $state;
    this.mainMenu = ualMainMenu;
    this._session = Session;
    this._expirationModal = expirationModal;
    this._suscriptions = [];
    this.msgText="";
    this.msgClass="";
    this._scope=$scope;
    this._timeout=$timeout;
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
    this._suscriptions.push(this._rootScope.$on('BANNER.SHOW', (event, data) => this.showBanner(data)));
  }

  showBanner(data) {
    this.msgClass=data.msgClass;
    this.msgClass['banner-hide']=false;
    if(!this.msgClass['-autoclose'])//no autoclose
    {
      this.msgClass['banner-show']=true;
    }else{
      let tmp=this;
      tmp._timeout(function() {
        tmp.msgClass={};
      }, 5000);//500ms(slideInDown)+4000ms(delay)+500ms(slideOutUp)
    }
    this.msgText=data.msgText;
  }

}

export default DashboardController;
