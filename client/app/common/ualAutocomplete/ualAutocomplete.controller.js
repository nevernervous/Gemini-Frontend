
// TODO: [IMPROVEMENT] Arrow up/down to navigate
// TODO: [FIX] Placeholder
// TODO: [FIX] Validation
// TODO: [FIX] Arrows left/right not working
class UalAutocompleteController {
  /*@ngInject*/
  constructor(
    // INTERNALS
    $element,
    $timeout,
    // COMPONENTS
    $mdMenu
  ) {
    this.name = 'ualAutocomplete';

    // INTERNALS
    this.$element = $element;
    this.$timeout = $timeout;

    // COMPONENTS
    this.components = {
      menu: $mdMenu
    }

    // STATE
    this.searchTerm = {}
  }

  // LIFECYCLE
  $onInit() {
    if ( this.selected ) {
      this.searchTerm[this.property] = this.selected[this.property];
    }
  }
  $postLink() {
    $(this.$element).find('.ual-input').width(this.width);
  }

  // SELECT
  selectItem(item) {
    this.selected = item;
    this.searchTerm[this.property] = item[this.property];
  }
  checkSelectedItem() {
    this.$timeout(() => {
      if ( this.searchTerm && this.selected &&
        ( this.searchTerm[this.property] !== this.selected[this.property]) ) {
        this.selected = null;
      }
    }, 500);
  }

}

export default UalAutocompleteController;
