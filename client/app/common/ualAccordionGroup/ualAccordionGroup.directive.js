import template from './ualAccordionGroup.html';
import controller from './ualAccordionGroup.controller';
import './ualAccordionGroup.scss';

class ualAccordionGroupDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'E';
    this.transclude = true;
    this.template = template;
    this.scope = {};
    this.controller = controller;
    this.controllerAs = 'vm';
  }

  link(scope, element, attrs, ctrl) {
    if (attrs.active) {
      ctrl.open(attrs.active);
    }
  }

};

export default ualAccordionGroupDirective;
