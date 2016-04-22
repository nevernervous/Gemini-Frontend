import template from './ualReportItem.html';
import controller from './ualReportItem.controller';
import './ualReportItem.scss';

let ualReportItemComponent = {
  restrict: 'E',
  bindings: {
    reportItem: '='
  },
  template,
  controller,
  controllerAs: 'vm',
  require: '^ualTable'
};

export default ualReportItemComponent;
