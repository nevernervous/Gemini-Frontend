import template from './ualDataSourceList.html';
import controller from './ualDataSourceList.controller';
import './ualDataSourceList.scss';

let ualDataSourceListComponent = {
  restrict: 'E',
  bindings: {
      dataSourceList : "=?",
      searchFilter: "=?"
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualDataSourceListComponent;
