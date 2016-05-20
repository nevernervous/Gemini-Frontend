class UalAccordionGroupController {
  /*@ngInject*/
  constructor($scope) {
    this.name = "ualAccordionGroup";
    this.accordions = {};
    this.active = null;
    this._scope = $scope;
  }

  add(key, accordion) {
    this.accordions[key] = accordion;
  };

  open(index) {
    this.close();
    this.accordions[index].status = 'open';
    this.active = index;
    this._scope.selected = index;
  };

  close() {
    if ( this.active ) {
      this.accordions[this.active].status = 'close';
    }
    this.active = null;
  }
}

export default UalAccordionGroupController;
