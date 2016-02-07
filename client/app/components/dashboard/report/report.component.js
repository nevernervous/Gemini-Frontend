import template from './report.html';
import controller from './report.controller';
import './report.scss';

let reportComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default reportComponent;
