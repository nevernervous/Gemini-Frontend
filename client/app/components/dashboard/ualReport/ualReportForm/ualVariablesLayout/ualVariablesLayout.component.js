import template from './ualVariablesLayout.html';
import controller from './ualVariablesLayout.controller';
import './ualVariablesLayout.scss';

let ualVariablesLayoutComponent = {
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

export default ualVariablesLayoutComponent;
