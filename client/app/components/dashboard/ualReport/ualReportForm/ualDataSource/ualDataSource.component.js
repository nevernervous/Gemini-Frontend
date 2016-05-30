import template from './ualDataSource.html';
import controller from './ualDataSource.controller';
import './ualDataSource.scss';

let ualDataSourceService = {
  restrict: 'E',
  bindings: {
    onChange: '&',
    hasVariables: '=',
    selected: '='
  },
  template,
  controller,
  controllerAs: 'vm'
}

export default ualDataSourceService;
