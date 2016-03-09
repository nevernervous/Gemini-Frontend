import template from './messageBanner.html';
import controller from './messageBanner.controller';
import './messageBanner.scss';

let messageBannerComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default messageBannerComponent;
