import template from './ualDataSourceList.html';
import controller from './ualDataSourceList.controller';
import './ualDataSourceList.scss';

let ualDataSourceListComponent = {
  restrict: 'E',
  bindings: {
      datasourceList : "=?",
      datasourceActive: "=?"
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualDataSourceListComponent;
