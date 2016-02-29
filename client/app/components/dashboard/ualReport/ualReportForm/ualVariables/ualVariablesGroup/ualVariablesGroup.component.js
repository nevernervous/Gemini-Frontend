import template from './ualVariablesGroup.html';
import controller from './ualVariablesGroup.controller';
import './ualVariablesGroup.scss';

let ualVariablesGroupComponent = {
    restrict: 'E',
    transclude: true,
    bindings: {
        groupItem: '=',
        groupName: '@'
    },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualVariablesGroupComponent;
