import template from './dropdownMenu.html';
import controller from './dropdownMenu.controller';
import './dropdownMenu.scss';

let dropdownMenuComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default dropdownMenuComponent;
