import template from './navOptions.html';
import controller from './navOptions.controller';
import './navOptions.scss';

let navOptionsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default navOptionsComponent;
