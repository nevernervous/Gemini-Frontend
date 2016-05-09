import template from './ualReportInput.html';
import controller from './ualReportInput.controller';
import './ualReportInput.scss';

let ualReportInputComponent = {
  restrict: 'E',
  bindings: {
    value: "=",
    label: '@',
    type: '@',
    onFocus: '&',
    isRequired: '=',
    invalidInput: '=',
    onSave: "&"
  },
  transclude: {
    "invalidmessage": "?ualInvalidMessage"
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualReportInputComponent;
