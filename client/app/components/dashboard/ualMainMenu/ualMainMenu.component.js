import template from './ualMainMenu.html';
import controller from './ualMainMenu.controller';
import './ualMainMenu.scss';

let ualMainMenuComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default ualMainMenuComponent;
