import template from './ualModal.html';
import controller from './ualModal.controller';
import './ualModal.scss';

let modalComponent = {
  restrict: 'E',
  transclude: true,
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default modalComponent;
