import template from './ualGroupFilter.html';
import controller from './ualGroupFilter.controller';
import './ualGroupFilter.scss';

let ualGroupFilterComponent = {
  restrict: 'E',
  bindings: {
    filters: "=",
    removeParent: '&',
    parentOperator: "<",
    availableVariables: "<"
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualGroupFilterComponent;
