import template from './ualLink.html';
import controller from './ualLink.controller';
import './ualLink.scss';


class ualLinkDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'E';
    this.transclude = true;
    this.template = template;
    this.controller = controller;
    this.scope = {
      icon: '@ualLinkIcon',
      ariaLabel: '@',
      onClick: '&ngHref',
      isDisabled: '=ngDisabled'
    };
  }

  link($scope, elem, attr, ctrl) {

  }
}

export default ualLinkDirective;
