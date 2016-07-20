import template from './ualAvailableSlicer.html';
import controller from './ualAvailableSlicer.controller';
import './ualAvailableSlicer.scss';

let ualAvailableSlicerComponent = {
  restrict: 'E',
  bindings: {
    availableSlicers: "<",
    slicers: "<"
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualAvailableSlicerComponent;
