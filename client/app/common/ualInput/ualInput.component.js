import template from './ualInput.html';
import controller from './ualInput.controller';
import './ualInput.scss';

let ualInputComponent = {
    restrict: 'E',
    require: '?ngModel',
    bindings: {
        ualId: '@',
        value: '=',
        minChars: '<',
        icon: '@',
        onBlur: '&?',
        onKeyup: '&?',
        onFocus: '&?',
        onKeypress: '&?',
        ualDebounce: '<',
        onChange: '&?',
        ualDisabled: '=',
        placeholder: '@'
    },
    transclude: true,
    template: template,
    controller: controller,
    controllerAs: 'vm'
}

export default ualInputComponent;
