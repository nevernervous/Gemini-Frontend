import template from './loginForm.html';
import controller from './loginForm.controller';
import './loginForm.scss';

let loginFormComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default loginFormComponent;
