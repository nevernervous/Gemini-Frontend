import template from './ualButtonFlat.html';
import controller from './ualButtonFlat.controller';
import './ualButtonFlat.scss';


class ualButtonFlatDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'E';
    this.transclude = true;
    this.template = template;
    this.controller = controller;
    this.scope = {
      icon: '@ualButtonFlatIcon',
      ariaLabel: '@',
      onClick: '&ngHref',
      isDisabled: '=ngDisabled'
    };
  }

  link($scope, elem, attr, ctrl) {

  }
}

export default ualButtonFlatDirective;
