import template from './ualTable.html';
import controller from './ualTable.controller';
import './ualTable.scss';

let ualTableComponent = {
  restrict: 'E',
  bindings: {
  },
  transclude: {
    'header': '?ualTableHeader',
    'body': 'ualTableBody',
    'footer': '?ualTableFooter'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualTableComponent;
