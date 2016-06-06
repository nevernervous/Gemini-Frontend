import template from './ualConditionsGroup.html';
import controller from './ualConditionsGroup.controller';
import './ualConditionsGroup.scss';

let ualConditionsGroupComponent = {
  restrict: 'E',
  bindings: {
    items : "="
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualConditionsGroupComponent;
