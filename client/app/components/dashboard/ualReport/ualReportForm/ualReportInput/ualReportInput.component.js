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
  template,
  controller,
  controllerAs: 'vm'
};

export default ualReportInputComponent;
