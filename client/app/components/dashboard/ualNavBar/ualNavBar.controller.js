import user from './user.jpg';
import menu from './menu.png';

class UalNavBarController {
  /*@ngInject*/
  constructor(ualMainMenu, ualNavBar, Session, logoutModal) {
    this.name = 'ualNavBar';
    this.user = user;
    this.menu = menu;
    this._session = Session;

    this._logoutModal = logoutModal;
    this.toggleMenu = ualMainMenu.toggle;

    this._service = ualNavBar;
    this.isOpenDropDown = ualNavBar.isOpen;
  }

  toggleDropDown($event) {
    $event.stopPropagation();
    this._service.toggle();
  }

  logout() {
    this._logoutModal.open()
    .then( response => response && this._session.logout() );
  }
}

export default UalNavBarController;
