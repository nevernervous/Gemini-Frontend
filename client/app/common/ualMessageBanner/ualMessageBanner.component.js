import template from './ualMessageBanner.html';
import controller from './ualMessageBanner.controller';
import './ualMessageBanner.scss';

let ualMessageBannerComponent = {
  restrict: 'E',
  transclude: true,
  template,
  controller,
  controllerAs: 'vm'
};

export default ualMessageBannerComponent;