import template from './ualGroupFilter.html';
import controller from './ualGroupFilter.controller';
import './ualGroupFilter.scss';

let ualGroupFilterComponent = {
  restrict: 'E',
  bindings: {},
  template,
  transclude : true,
  controller,
  controllerAs: 'vm'
};

export default ualGroupFilterComponent;
