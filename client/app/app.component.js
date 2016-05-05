import template from './app.html';
import controller from './app.controller';

let appComponent = {
  restrict: 'E',
  template,
  controller,
  controllerAs: 'vm'  
};

export default appComponent;
