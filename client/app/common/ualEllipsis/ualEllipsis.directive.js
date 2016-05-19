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
    ctrl._timeout(function () {
      $(elem).dotdotdot({
        wrap: 'letter',
        height: parseInt($scope.ellipsisHeight ? $scope.ellipsisHeight : 15),
        ellipsis: '...'
      });
    }, 0);
  }
}

export default ualEllipsisDirective;
