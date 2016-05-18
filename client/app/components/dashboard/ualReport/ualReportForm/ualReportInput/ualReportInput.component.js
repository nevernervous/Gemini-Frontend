import template from './ualReportInput.html';
import controller from './ualReportInput.controller';
import './ualReportInput.scss';

let ualReportInputComponent = {
  restrict: 'E',
  bindings: {
    ualId: '@',
    ualValue: '=',
    icon: '@',
    onBlur: '&?',
    onKeyup: '&?',
    onFocus: '&?',
    onKeypress: '&?',
    onChange: '&?',
    ualDisabled: '<',
    placeholder: '@'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualReportInputComponent;
