import angular from 'angular';
import ualSearchFilterComponent from './ualSearchFilter.component';

let ualSearchFilterModule = angular.module('ualSearchFilter', [])

.component('ualSearchFilter', ualSearchFilterComponent);

export default ualSearchFilterModule;
