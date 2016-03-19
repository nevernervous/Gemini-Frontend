import template from './ualPane.html';
import controller from './ualPane.controller';
import './ualPane.scss';

let ualPaneComponent = {
  restrict: 'E',
  transclude: true,
  bindings: {
    ualTitle: '@',
    action: '@',
    onAction: '&',
    isDisabled: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualPaneComponent;
