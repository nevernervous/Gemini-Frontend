import template from './ualDropdownItem.html';
import controller from './ualDropdownItem.controller';
import './ualDropdownItem.scss';

let ualDropdownItemComponent = {
  restrict: 'E',
  bindings: {
      name : "@"
  },
  template,
  controller,
  transclude: true,
  controllerAs: 'vm'
};

export default ualDropdownItemComponent;
