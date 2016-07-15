import template from './ualVariablesToSliceSelectedItem.html';
import controller from './ualVariablesToSliceSelectedItem.controller';
import './ualVariablesToSliceSelectedItem.scss';

let ualVariablesToSliceSelectedItemComponent = {
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

export default ualVariablesToSliceSelectedItemComponent;
