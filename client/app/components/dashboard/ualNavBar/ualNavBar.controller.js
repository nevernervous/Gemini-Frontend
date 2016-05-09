import user from './user.jpg';
import menu from './menu.png';

class UalNavBarController {
  /*@ngInject*/
  constructor(ualMainMenu, ualNavBar, Session, logoutModal, Report, ualUnsafeReportModal) {
    this.name = 'ualNavBar';
    this.user = user;
    this.menu = menu;
    this._session = Session;

    this._checkChanges = {
      report: Report.currentReport()
    };
    this._unstagedModal = ualUnsafeReportModal;
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
      .then(response => {
        if (response && this._checkChanges.report.touched()) {
          return this._unstagedModal.open()
        }
        return response;
      })
      .then(response => {
        if (response) {
          this._checkChanges.report.untouch();
          this._session.logout()
        }
      })
  }
}

export default UalNavBarController;
