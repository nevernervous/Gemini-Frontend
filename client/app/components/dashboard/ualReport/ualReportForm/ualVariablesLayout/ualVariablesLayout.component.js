import template from './ualVariablesLayout.html';
import controller from './ualVariablesLayout.controller';
import './ualVariablesLayout.scss';

let ualVariablesLayoutComponent = {
  restrict: 'E',
  bindings: {
    variables: "=",
    aggregators: "=",
    datasource: "<",
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualVariablesLayoutComponent;
