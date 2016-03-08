import template from './ualInput.html';
import controller from './ualInput.controller';
import './ualInput.scss';

let ualInputComponent = {
    restrict: 'E',
    bindings: {
        value: '=',
        minChars: '=',
        icon: '@'
    },
    template: template,
    controller: controller,
    controllerAs: 'vm'
}

export default ualInputComponent;
