import template from './ualLoading.html';
import controller from './ualLoading.controller';
import './ualLoading.scss';

let ualLoadingComponent = {
  restrict: 'E',
  transclude: true,
  bindings: {
    diameter: '@ualLoadingDiameter',
    loading: '=ualLoadingEnable'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualLoadingComponent;
