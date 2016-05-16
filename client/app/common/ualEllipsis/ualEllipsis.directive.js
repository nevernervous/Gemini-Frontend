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
    window.setTimeout(function () {
      $(elem).dotdotdot({
        wrap: 'letter',
        height: 15,
        ellipsis: '...'
      });
    }, 400);
    
  }
}

export default ualEllipsisDirective;
