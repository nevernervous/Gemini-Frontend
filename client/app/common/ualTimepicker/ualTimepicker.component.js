import template from './ualTimepicker.html';
import controller from './ualTimepicker.controller';
import './ualTimepicker.scss';

let ualTimepickerComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default ualTimepickerComponent;
