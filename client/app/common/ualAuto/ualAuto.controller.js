class UalAutoController {
  /*@ngInject*/
  constructor(
    // INTERNALS
    $timeout,
    $element,
    // COMPONENTS
    $mdMenu
  ) {
    this.name = 'ualAuto';

    // INTERNALS
    this.$timeout = $timeout;
    this.$element = $element;

    // COMPONENTS
    this.components = {
      menu: $mdMenu
    }

    // STATE
    this.isOpen = false;
  }

  $postLink() {
    $(this.$element).find('.ual-input').width('240px');
  }

  openMenu(event){
    // service(event); // $mdOpenMenu($event);
    this.$timeout(() => {
      this.isOpen = true;
      console.log("ENTRO!");
      $('.md-scroll-mask').hide();
      $('._md-menu-backdrop').hide();
      $(event.target).focus();
    }, 500);
  }

  closeMenu() {
    this.isOpen = false;
    //$('.md-scroll-mask').show();
    //$('._md-menu-backdrop').show();
    this.components.menu.hide();
  }
}

export default UalAutoController;
