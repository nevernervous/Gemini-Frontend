import template from './loginFormSubmit.html';
import controller from './loginFormSubmit.controller';
import './loginFormSubmit.scss';

let loginFormSubmitComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default loginFormSubmitComponent;
