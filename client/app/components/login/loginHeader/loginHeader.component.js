import template from './loginHeader.html';
import controller from './loginHeader.controller';
import './loginHeader.scss';

let loginHeaderComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default loginHeaderComponent;
