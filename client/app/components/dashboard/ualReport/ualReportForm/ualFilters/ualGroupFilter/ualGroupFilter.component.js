import template from './ualGroupFilter.html';
import controller from './ualGroupFilter.controller';
import './ualGroupFilter.scss';

let ualGroupFilterComponent = {
  restrict: 'E',
  bindings: {
    addCondition:"&",
    operatorGroup:"=",
    collection: "="
  },
  template,
  transclude : true,
  controller,
  controllerAs: 'vm'
};

export default ualGroupFilterComponent;
