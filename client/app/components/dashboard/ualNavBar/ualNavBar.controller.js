import user from './user.jpg';

class UalNavBarController {
  /*@ngInject*/
  constructor(ualMainMenu, Session, logoutModal) {
    this.name = 'ualNavBar';
    this.user = user;
    this._session = Session;
    
    this._logoutModal = logoutModal;
    this.toggleMenu = ualMainMenu.toggle;
  }
  
  logout() { 
    this._logoutModal.open()
    .then( response => response && this._session.logout() ); 
  }
}

export default UalNavBarController;
