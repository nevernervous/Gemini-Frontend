import template from './ualNavBar.html';
import controller from './ualNavBar.controller';
import './ualNavBar.scss';

let ualNavBarComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default ualNavBarComponent;
