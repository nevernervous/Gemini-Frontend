import template from './ualLoading.html';
import controller from './ualLoading.controller';
import './ualLoading.scss';

let ualLoadingComponent = {
  restrict: 'E',
  transclude: true,
  bindings: {
    ualLoadingDiameter: '@',
    ualLoadingEnable: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualLoadingComponent;
