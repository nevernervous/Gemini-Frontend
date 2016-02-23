import template from './ualTab.html';
import controller from './ualTab.controller';
import './ualTab.scss';

let ualTabComponent = {
  restrict: 'E',
  bindings: {
      label: '@'
  },
  require: {
      tabsCtrl: '^ualTabContainer'
  },
  transclude: true,
  template,
  controller,
  controllerAs: 'vm'
};

export default ualTabComponent;
