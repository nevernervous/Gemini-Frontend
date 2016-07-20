import template from './ualDate.html';
import controller from './ualDate.controller';
import './ualDate.scss';

let ualDateComponent = {
  restrict: 'E',
  bindings: {
    ngModel: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualDateComponent;
