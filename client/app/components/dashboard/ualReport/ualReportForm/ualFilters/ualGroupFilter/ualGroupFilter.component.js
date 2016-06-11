import template from './ualGroupFilter.html';
import controller from './ualGroupFilter.controller';
import './ualGroupFilter.scss';

let ualGroupFilterComponent = {
  restrict: 'E',
  bindings: {
    items: "=",
    removeParent: '&',
    depth: "<",
    collection: "=",
    datasource : "<",
    parentOperator: "<"
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualGroupFilterComponent;
