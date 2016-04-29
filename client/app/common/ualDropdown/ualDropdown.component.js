import template from './ualDropdown.html';
import controller from './ualDropdown.controller';
import './ualDropdown.scss';

let ualDropdownComponent = {
  restrict: 'E',
  bindings: {
  },
  template,
  controller,
  transclude: {
      'messages': '?ualDropdownMessages',
      'items': "ualDropdownItems"
  },
  controllerAs: 'vm'
};

export default ualDropdownComponent;
