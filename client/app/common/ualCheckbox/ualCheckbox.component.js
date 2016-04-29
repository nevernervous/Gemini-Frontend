import template from './ualCheckbox.html';
import controller from './ualCheckbox.controller';
import './ualCheckbox.scss';

let ualCheckboxComponent = {
  restrict: 'E',
  transclude: true,
  bindings: {
    id: '@',
    item: '=',
    onClick: '&',
    isChecked: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualCheckboxComponent;
