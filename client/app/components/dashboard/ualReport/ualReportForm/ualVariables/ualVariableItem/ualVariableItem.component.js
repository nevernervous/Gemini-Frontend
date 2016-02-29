import template from './ualVariableItem.html';
import controller from './ualVariableItem.controller';
import './ualVariableItem.scss';

let ualVariableItemComponent = {
    restrict: 'E',
    transclude: true,
    bindings: {},
    template,
    controller,
    controllerAs: 'vm',
    require: {
        variableGroup: '^ualVariablesGroup'
    },
};

export default ualVariableItemComponent;
