import template from './ualReportInput.html';
import controller from './ualReportInput.controller';
import './ualReportInput.scss';

let ualReportInputComponent = {
  restrict: 'E',
  bindings: {
    report: '=',
    label: '@',
    type: '@',
    value: '=',
    onFocus: '&',
    isRequired: '=',
    invalidInput: '=',
  },
  transclude: {
    "invalidmessage": "?ualInvalidMessage"
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualReportInputComponent;
