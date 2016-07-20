class ualSidenavController {
  /*@ngInject*/
  constructor(
    $state,
    ualSidenav) {
    this.$state = $state;
    this.components = {
      sidenav: ualSidenav
    }
  }

}

export default ualSidenavController;
