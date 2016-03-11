import template from './ualAgregationItem.html';
import controller from './ualAgregationItem.controller';
import './ualAgregationItem.scss';

let ualAgregationItemComponent = {
  restrict: 'E',
  bindings: {
  },
  template,
  controller,
  transclude: true,
  controllerAs: 'vm'
};

export default ualAgregationItemComponent;
