class UalDropdownController {
  /*@ngInject*/
  constructor() {
    this.name = 'ualDropdown';
    this.isVisible = false;
  }
  select($event, item) {
    $event.stopPropagation();
    if (!_.isEqual(this.selected, item) && !!this.onChange) {
     this.onChange() ;
    }
    this.selected = item;
    this.isVisible = false;
  }

  getText(item) {
    return !this.property || !item ? item : item[this.property];
  }

  toogle() {
    this.isVisible = !this.isVisible;
  }
}

export default UalDropdownController;
