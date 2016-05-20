class UalAccordionGroupController {
  /*@ngInject*/
  constructor() {
    this.name = "ualAccordionGroup";
    this.accordions = {};
    this.active = null;
  }

  add(key, accordion) {
    this.accordions[key] = accordion;
  };

  open(index) {
    this.close();
    this.accordions[index].status = 'open';
    this.active = index;
  };

  close() {
    if ( this.active ) {
      this.accordions[this.active].status = 'close';
    }
    this.active = null;
  }
}

export default UalAccordionGroupController;
