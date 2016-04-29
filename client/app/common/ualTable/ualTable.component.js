<<<<<<< HEAD:client/app/common/ualTable/ualTable.component.js
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
=======
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
>>>>>>> 83eb1d47c72147042cd3e6b6b3fe22ba1d67a335:client/app/components/dashboard/ualReport/ualReportList/ualTable/ualTable.component.js
