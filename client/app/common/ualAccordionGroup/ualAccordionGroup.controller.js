class UalAccordionGroupController {
  /*@ngInject*/
  constructor($scope) {
    this.accordions = {};
    this.active = null;
    this.scope = $scope;
  }

  add(key, accordion) {
    this.accordions[key] = accordion;
  };

  open(index) {
    this.close();
    this.scope.$parent.$broadcast('UALACORDION.OPEN',index);
    this.accordions[index].status = 'open';
    this.active = index;
    this.scope.$parent.$broadcast('UALACORDION.OPENED',index);
  };

  close() {
    this.scope.$parent.$broadcast('UALACORDION.CLOSE',this.active);
    if ( this.active ) {
      this.accordions[this.active].status = 'close';
    }
    this.scope.$parent.$broadcast('UALACORDION.CLOSED',this.active);
    this.active = null;
  }
}

export default UalAccordionGroupController;
