import template from './ualLabelCount.html';
import controller from './ualLabelCount.controller';
import './ualLabelCount.scss';

let ualLabelCountComponent = {
  restrict: 'E',
  bindings: {
      totalRows: '@',
      labelText: '@'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualLabelCountComponent;
