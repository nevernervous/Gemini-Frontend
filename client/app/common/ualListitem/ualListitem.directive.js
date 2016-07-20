import template from './ualListitem.html';
import controller from './ualListitem.controller';
import './ualListitem.scss';


class ualListitemDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.transclude = true;
    this.template = template;
    this.controller = controller;
    this.scope = {
      icon: '@ualListitemIcon'
    };
  }

  link($scope, elem, attr, ctrl) {

  }
}

export default ualListitemDirective;
