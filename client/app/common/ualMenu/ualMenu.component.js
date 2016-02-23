import template from './ualMenu.html';
import controller from './ualMenu.controller';
import './ualMenu.scss';

let ualMenuComponent = {
  restrict: 'E',
  transclude: true,
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default ualMenuComponent;
