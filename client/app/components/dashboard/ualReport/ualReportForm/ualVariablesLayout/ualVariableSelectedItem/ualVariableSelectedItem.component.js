import template from './ualVariableSelectedItem.html';
import controller from './ualVariableSelectedItem.controller';
import './ualVariableSelectedItem.scss';

let ualVariableSelectedItemComponent = {
  restrict: 'E',
  bindings: {
    variableId: '@',
    variableItem: '<',
    variableOrder: '<',
    variableTotal: '<',
    cbChange: '=',
    cbBind: '=',
    onDelete: '&',
    prefix: '@'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualVariableSelectedItemComponent;
