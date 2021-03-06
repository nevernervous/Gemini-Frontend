import template from './ualDataSourceLabel.html';
import controller from './ualDataSourceLabel.controller';
import './ualDataSourceLabel.scss';

let ualDataSourceLabelComponent = {
  restrict: 'E',
  bindings: {
      datasourceSelected : "="
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualDataSourceLabelComponent;
