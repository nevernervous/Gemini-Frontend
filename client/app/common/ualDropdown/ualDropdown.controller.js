class UalDropdownController {
  /*@ngInject*/
  constructor() {
    this.name = 'ualDropdown';
    this.isVisible = false;
    this.isPlaceholder = true;
  }
  select($event, item) {
    $event.stopPropagation();
    this.selected = item;
    this.isPlaceholder = false;
    this.isVisible = false;
  }

  getText(item){
    return !this.property ? item : item[this.property];
  }

  toogle() {
    this.isVisible = !this.isVisible;
  }
}

export default UalDropdownController;
