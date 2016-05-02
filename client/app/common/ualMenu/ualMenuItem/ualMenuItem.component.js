import template from './ualMenuItem.html';
import controller from './ualMenuItem.controller';
import './ualMenuItem.scss';

let ualMenuItemComponent = {
  restrict: 'E',
  transclude: true,
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default ualMenuItemComponent;
