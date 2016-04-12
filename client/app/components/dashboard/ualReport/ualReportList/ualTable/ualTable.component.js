import template from './ualTable.html';
import controller from './ualTable.controller';
import './ualTable.scss';

let ualTableComponent = {
  restrict: 'E',
  bindings: {
      tableData: '&',
      tableColumns: '=',
      predicate: '=',
      reverse: '='   
  },
  transclude: {
    'row': 'ualTableRow'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualTableComponent;
