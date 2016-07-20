import template from './ualNavbar.html';
import controller from './ualNavbar.controller';
import './ualNavbar.scss';

let ualNavbarComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default ualNavbarComponent;
