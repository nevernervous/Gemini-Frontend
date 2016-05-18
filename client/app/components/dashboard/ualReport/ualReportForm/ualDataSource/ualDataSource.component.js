import template from './ualDataSource.html';
import controller from './ualDataSource.controller';
import './ualDataSource.scss';

let ualDataSourceService = {
  restrict: 'E',
  bindings: {
    onChange: '&'
  },
  template,
  controller,
  controllerAs: 'vm'
}

export default ualDataSourceService;
