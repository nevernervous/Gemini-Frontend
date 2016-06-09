import template from './ualDropdown.html';
import controller from './ualDropdown.controller';
import './ualDropdown.scss';

let ualDropdownComponent = {
  restrict: 'E',
  bindings: {
    placeholder: "@?",
    selected: "=",
    property: "@?",
    list: '=',
    onChange: '&'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualDropdownComponent;
