import template from './mainMenuHandler.html';
import controller from './mainMenuHandler.controller';
import './mainMenuHandler.scss';

let mainMenuHandlerComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default mainMenuHandlerComponent;
