import template from './ualAuto.html';
import controller from './ualAuto.controller';
import './ualAuto.scss';

let ualAutoComponent = {
  restrict: 'E',
  bindings: {
    items: '<',
    width: '@inputWidth'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualAutoComponent;
