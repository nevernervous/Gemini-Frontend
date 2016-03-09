import template from './ualDataSourceGroup.html';
import controller from './ualDataSourceGroup.controller';
import './ualDataSourceGroup.scss';

let ualDataSourceGroupComponent = {
  restrict: 'E',
  bindings: {
      datasourceGroup : "="
  },
  template,
  transclude: true,
  controller,
  controllerAs: 'vm'
};

export default ualDataSourceGroupComponent;
