class UalDropdownController {
  /*@ngInject*/
  constructor() {
    this.name = 'ualDropdown';
    this.isVisible = false;
    this.limit=0;
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
    this.limit=this.isVisible?this.list.length:0;
  }
}

export default UalDropdownController;
