import user from './user.jpg';
import menu from './menu.png';

class UalNavbarController {
  /*@ngInject*/
  constructor(Report, ualSidenav, ualDialog, Session, logoutModal, ualUnsafeReportModal) {
    this.name = 'ualNavbar';
    this.user = user;
    this.menu = menu;
    this._session = Session;

    this._checkChanges = {
      report: Report.currentReport()
    };
    this._unstagedModal = ualUnsafeReportModal;
    this._logoutModal = logoutModal;

    this.toggle = ualSidenav.toggle;

    this.components = {
      dialog: ualDialog
    }
  }

  toggleDropDown($event) {
    $event.stopPropagation();
    this._service.toggle();
  }

  logout(ev) {
    const options = {
      target: ev
    };

    this.components.dialog.confirm(
      'Are you sure you want to logout?',
      null,
      options)
    .then(() => {
      this._checkChanges.report.untouch();
      this._session.logout();
    });

  }
}

export default UalNavbarController;
