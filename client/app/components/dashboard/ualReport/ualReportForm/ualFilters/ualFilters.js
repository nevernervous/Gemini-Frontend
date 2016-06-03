import angular from 'angular';
import ualFiltersComponent from './ualFilters.component';
import ualGroupFilterComponent from './ualGroupFilter/ualGroupFilter';
import ualFilterCondition from './ualFilterCondition/ualFilterCondition';


let ualFiltersModule = angular.module('ualFilters', [
  ualGroupFilterComponent.name,
  ualFilterCondition.name
])

.component('ualFilters', ualFiltersComponent);

export default ualFiltersModule;
