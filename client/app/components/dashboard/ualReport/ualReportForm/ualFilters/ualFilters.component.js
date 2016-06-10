import template from './ualFilters.html';
import controller from './ualFilters.controller';
import './ualFilters.scss';

let ualFiltersComponent = {
  restrict: 'E',
  bindings: {
    items: "=",
    datasource: "<"
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default ualFiltersComponent;
