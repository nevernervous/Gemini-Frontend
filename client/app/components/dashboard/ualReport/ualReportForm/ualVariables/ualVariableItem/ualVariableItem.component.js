import template from './ualVariableItem.html';
import controller from './ualVariableItem.controller';
import './ualVariableItem.scss';

let ualVariableItemComponent = {
    restrict: 'E',
    transclude: true,
    bindings: {
        variableName: '@'
    },
    template,
    controller,
    controllerAs: 'vm'
};

export default ualVariableItemComponent;
