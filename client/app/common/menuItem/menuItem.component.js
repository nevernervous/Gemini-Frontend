import template from './menuItem.html';
import controller from './menuItem.controller';
import './menuItem.scss';

let menuItemComponent = {
  restrict: 'E',
  transclude: true,
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default menuItemComponent;
