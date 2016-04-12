import template from './ualMessageBanner.html';
import controller from './ualMessageBanner.controller';
import './ualMessageBanner.scss';

let ualMessageBannerComponent = {
  restrict: 'E',
  bindings: {
      text: "<"
  },
  transclude: true,
  template,
  controller,
  controllerAs: 'vm'
};

export default ualMessageBannerComponent;
