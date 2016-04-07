import template from './ualColumn.html';
import controller from './ualColumn.controller';
import './ualColumn.scss';

let ualColumnComponent = {
  restrict: 'E',
  transclude: true,
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default ualColumnComponent;
