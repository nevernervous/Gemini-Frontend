import template from './ualAgregationItem.html';
import controller from './ualAgregationItem.controller';
import './ualAgregationItem.scss';

let ualAgregationItemComponent = {
  restrict: 'E',
  bindings: {
      name: "@?",
      numerator: "=?"
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualAgregationItemComponent;
