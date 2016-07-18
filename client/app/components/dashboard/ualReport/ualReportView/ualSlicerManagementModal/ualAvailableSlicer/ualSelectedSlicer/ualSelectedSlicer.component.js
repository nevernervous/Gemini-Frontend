import template from './ualSelectedSlicer.html';
import controller from './ualSelectedSlicer.controller';
import './ualSelectedSlicer.scss';

let ualSelectedSlicerComponent = {
  restrict: 'E',
  bindings: {
    variableType: '@',
    variableOrder: '=',
    variableItem: '<',
    variableTotal: '<',
    variableChange: '&',
    onDelete: '&'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualSelectedSlicerComponent;
