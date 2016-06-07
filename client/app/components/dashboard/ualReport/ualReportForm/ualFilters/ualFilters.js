import angular from 'angular';
import ualFiltersComponent from './ualFilters.component';
import ualGroupFilterComponent from './ualGroupFilter/ualGroupFilter';

let ualFiltersModule = angular.module('ualFilters', [
  ualGroupFilterComponent.name
])

.component('ualFilters', ualFiltersComponent);

export default ualFiltersModule;
