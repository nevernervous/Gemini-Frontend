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
      onChange: '&'
    };
    this.controller = controller;
    this.controllerAs = 'vm';
  }

  link(scope, element, attrs, ctrl) {
    //Hack for bind function to controller. I don't know why Directive doesn't work like as Component
    ctrl.onChange = scope.onChange;
    scope.$watch(
      () => element.attr('active'),
      newValue => {
        ctrl.open(attrs.active);
      }
    );
  }

};

export default ualAccordionGroupDirective;
