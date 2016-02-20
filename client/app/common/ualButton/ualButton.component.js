import template from './ualButton.html';
import controller from './ualButton.controller';
import './ualButton.scss';

let ualButtonComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default ualButtonComponent;
