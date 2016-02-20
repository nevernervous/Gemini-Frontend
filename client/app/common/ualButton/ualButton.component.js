import template from './ualButton.html';
import controller from './ualButton.controller';
import './ualButton.scss';

let ualButtonComponent = {
  restrict: 'E',
  transclude: true,
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default ualButtonComponent;
