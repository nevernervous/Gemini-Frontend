import template from './ualEllipsis.html';
import controller from './ualEllipsis.controller';
import './ualEllipsis.scss';


class ualEllipsisDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'A';
    this.template = template;
    this.controller = controller;
  }

  link($scope, elem, attr, ctrl) {
    $(elem).dotdotdot({
      wrap: 'letter'
    });
  }
}

export default ualEllipsisDirective;
