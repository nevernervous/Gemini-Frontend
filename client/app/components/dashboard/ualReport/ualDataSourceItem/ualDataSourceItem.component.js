import template from './ualDataSourceItem.html';
import controller from './ualDataSourceItem.controller';
import './ualDataSourceItem.scss';

let ualDataSourceItemComponent = {
  restrict: 'E',
  bindings: {
      item: ""
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualDataSourceItemComponent;
