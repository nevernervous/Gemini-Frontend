import template from './ualVariables.html';
import controller from './ualVariables.controller';
import './ualVariables.scss';

let ualVariablesComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default ualVariablesComponent;
