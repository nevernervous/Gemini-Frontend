import template from './ualDataSource.html';
import controller from './ualDataSource.controller';
import './ualDataSource.scss';

let ualDataSourceService = {
  restrict: 'E',
  bindings: {
    selected: '=?'
  },
  template,
  controller,
  controllerAs: 'vm'
}

export default ualDataSourceService;
