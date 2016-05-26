import template from './ualVariablesMultiSelect.html';
import controller from './ualVariablesMultiSelect.controller';
import './ualVariablesMultiSelect.scss';

let ualVariablesMultiSelectComponent = {
  restrict: 'E',
  bindings: {
    selectedReference: "=",
    datasource: "<"
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualVariablesMultiSelectComponent;
