import template from './ualDataSourceItem.html';
import controller from './ualDataSourceItem.controller';
import './ualDataSourceItem.scss';

let ualDataSourceItemComponent = {
  restrict: 'E',
  bindings: {
      datasourceItem: "=?",
      datasourceActive: '=?'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualDataSourceItemComponent;
