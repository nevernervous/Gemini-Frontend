import template from './ualDropdownGroup.html';
import controller from './ualDropdownGroup.controller';
import './ualDropdownGroup.scss';

let ualDropdownGroupComponent = {
  restrict: 'E',
  bindings: {
      name : "@"      
  },
  template,
  controller,
  transclude: true,
  controllerAs: 'vm'
};

export default ualDropdownGroupComponent;
