import template from './ualVariableSelectedItem.html';
import controller from './ualVariableSelectedItem.controller';
import './ualVariableSelectedItem.scss';

let ualVariableSelectedItemComponent = {
  restrict: 'E',
  bindings: {
    variableItem: '<',
    variableOrder: '<',
    onDelete: '&'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualVariableSelectedItemComponent;
