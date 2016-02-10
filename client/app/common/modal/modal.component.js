import template from './modal.html';
import controller from './modal.controller';
import './modal.scss';

let modalComponent = {
  restrict: 'E',
  transclude: true,
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default modalComponent;
