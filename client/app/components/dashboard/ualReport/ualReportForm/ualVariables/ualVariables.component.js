import template from './ualVariables.html';
import controller from './ualVariables.controller';
import './ualVariables.scss';

let ualVariablesComponent = {
  restrict: 'E',
  bindings: {
    datasource: "<",
    variables: "<",
    aggregators: "<"
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualVariablesComponent;
