import template from './ualEllipsis.html';
import controller from './ualEllipsis.controller';
import './ualEllipsis.scss';


class ualEllipsisDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'A';
    this.template = template;
    this.controller = controller;
    this.scope = {
      ellipsisHeight: '@'
    }
  }

  link($scope, elem, attr, ctrl) {
    if ($scope.ellipsisHeight){
      window.setTimeout(function () {
        $(elem).dotdotdot({
          wrap: 'letter',
          height: parseInt($scope.ellipsisHeight),
          ellipsis: '...'
        });
      }, 400);
    }
  }
}

export default ualEllipsisDirective;
