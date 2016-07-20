import template from './ualPopover.html';
import controller from './ualPopover.controller';
import './ualPopover.scss';


class ualPopoverDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'EA';
    this.replace = true;
    this.transclude = true;
    this.template = template;
    this.controller = controller;
    this.scope = {
      direction: '@',
      trigger: '@',
      onClose: '&',
      onOpen: '&',
      popoverClass: '@'
    };
  }

  // TODO: Refactor to ES6
  link($scope, element, attrs, ctrl) {
    $scope.popoverClass = attrs.popoverClass;
    $scope.dropDirection = attrs.direction || 'bottom';
  }
}

export default ualPopoverDirective;
