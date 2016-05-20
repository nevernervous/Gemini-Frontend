class UalAccordionGroupController {
  /*@ngInject*/
  constructor($scope) {
    this.accordions = {};
    this.active = null;
    this._scope = $scope;
  }

  add(key, accordion) {
    this.accordions[key] = accordion;
  };

  open(index) {
    this.close();
    this._scope.$parent.$broadcast('UALACORDION.OPEN',index);
    this.accordions[index].status = 'open';
    this.active = index;
    this._scope.$parent.$broadcast('UALACORDION.OPENED',index);
    this._scope.selected = index;
  };

  close() {
    this._scope.$parent.$broadcast('UALACORDION.CLOSE',this.active);
    if ( this.active ) {
      this.accordions[this.active].status = 'close';
    }
    this._scope.$parent.$broadcast('UALACORDION.CLOSED',this.active);
    this.active = null;
  }
}

export default UalAccordionGroupController;
