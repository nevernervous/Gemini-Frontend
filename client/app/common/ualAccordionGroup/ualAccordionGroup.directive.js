import template from './ualAccordionGroup.html';
import controller from './ualAccordionGroup.controller';
import './ualAccordionGroup.scss';

class ualAccordionGroupDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'E';
    this.transclude = true;
    this.template = template;
    this.scope = {
      selected: '='
    };
    this.controller = controller;
    this.controllerAs = 'vm';
  }

  link(scope, element, attrs, ctrl) {
    scope.$watch(
      'selected',
      newValue => {
        ctrl.open(newValue);
      }
    );
  }

};

export default ualAccordionGroupDirective;
