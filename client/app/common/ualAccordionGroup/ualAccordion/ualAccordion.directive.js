import template from './ualAccordion.html';
import './ualAccordion.scss';

class ualAccordionDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'E';
    this.scope = {};
    this.transclude = {
      'title': 'ualAccordionTitle',
      'content': 'ualAccordionContent'
    };
    this.replace = true;
    this.template = template;
    this.require = '^ualAccordionGroup';
    this.bindings = {};
  }

  link(scope, element, attrs, ctrl) {
    scope.accordion = {
      status: 'close' // 'open', 'close', 'disable'
    };

    scope.vm = {
      toggle: () => {
        if ( scope.accordion.status == 'open' ) {
          ctrl.close();
        } else if (scope.accordion.status == 'close') {
          ctrl.open(attrs.id);   
         }
      }
    }

    scope.$watch(
      () => element.attr('disabled'),
      newValue => {
        if (newValue) {
          if ( scope.accordion.status === 'open') { // IF THIS IS OPEN, THEN CLOSE
            ctrl.close();
          }
          scope.accordion.status = 'disable';
        } else {
          if ( scope.accordion.status === 'disable') {
            scope.accordion.status = 'close';
          }
        }
      }
    );

    ctrl.add(attrs.id, scope.accordion);
  }
}

export default ualAccordionDirective;
