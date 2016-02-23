import template from './ualTabContainer.html';
import controller from './ualTabContainer.controller';
import './ualTabContainer.scss';

let ualTabContainerComponent = {
  restrict: 'E',
  transclude: true,
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default ualTabContainerComponent;
