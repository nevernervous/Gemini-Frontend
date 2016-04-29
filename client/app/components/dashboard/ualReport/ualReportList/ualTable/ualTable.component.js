import template from './ualTable.html';
import controller from './ualTable.controller';
import './ualTable.scss';

let ualTableComponent = {
  restrict: 'E',
  bindings: {
      tableColumns: '=',
      predicate: '=',
      reverse: '=', 
  },
  transclude: true,
  template,
  controller,
  controllerAs: 'vm'
};

export default ualTableComponent;
