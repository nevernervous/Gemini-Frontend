import template from './mainMenu.html';
import controller from './mainMenu.controller';
import './mainMenu.scss';

let mainMenuComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default mainMenuComponent;
