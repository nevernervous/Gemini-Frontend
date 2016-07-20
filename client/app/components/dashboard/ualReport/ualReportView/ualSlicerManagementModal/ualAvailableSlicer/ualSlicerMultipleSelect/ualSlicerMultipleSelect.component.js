import template from './ualSlicerMultipleSelect.html';
import controller from './ualSlicerMultipleSelect.controller';
import './ualSlicerMultipleSelect.scss';

let ualSlicerMultipleSelectComponent = {
  restrict: 'E',
  bindings: {
    availableSlicers: "<",
    selectedReference: "=",
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualSlicerMultipleSelectComponent;
