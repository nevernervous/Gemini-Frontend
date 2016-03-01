import template from './ualDataSourceItem.html';
import controller from './ualDataSourceItem.controller';
import './ualDataSourceItem.scss';

let ualDataSourceItemComponent = {
  restrict: 'E',
  bindings: {
      datasourceItem: "="
  },
  template,
  transclude: true,
  controller,
  controllerAs: 'vm'
};

export default ualDataSourceItemComponent;
