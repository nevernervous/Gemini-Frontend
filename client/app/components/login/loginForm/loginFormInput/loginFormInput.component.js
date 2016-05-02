import template from './loginFormInput.html';
import controller from './loginFormInput.controller';
import './loginFormInput.scss';

let loginFormInputComponent = {
  restrict: 'E',
  bindings: {
    label: '@',
    type: '@',
    value: '=',
    onFocus: '&',
    isRequired: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default loginFormInputComponent;
