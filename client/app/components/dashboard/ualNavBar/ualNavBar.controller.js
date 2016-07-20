import user from './user.jpg';
import menu from './menu.png';

class UalNavbarController {
  /*@ngInject*/
  constructor(
    Report, Session,
    ualSidenav, ualDialog) {
    this.name = 'ualNavbar';

    // IMAGES
    this.user = user;
    this.menu = menu;

    // SERVICES
    this.services = {
      report: Report.currentReport(),
      session: Session
    }

    // COMPONENTS
    this.components = {
      dialog: ualDialog,
      sidenav: ualSidenav
    }
  }

  toggle() {
    console.log('toggle');
    this.components.sidenav.toggle();
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
      return this.services.report.touched() ?
        this.components.dialog.confirm( 'Exit without saving?' ) :
        true;
    })
    .then(() => this.services.session.logout() );

  }
}

export default UalNavbarController;
