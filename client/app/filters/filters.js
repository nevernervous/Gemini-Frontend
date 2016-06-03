import angular from 'angular';
import angularFilter from 'angular-filter';
import secondstotime from './secondstotime/secondstotime';
import filterBy from './filterBy/filterBy';
import visible from './visible/visible';

let filtersModule = angular.module('filters', [
  'angular.filter'
])
filtersModule
.filter('secondstotime', secondstotime)
.filter('filterBy', filterBy)
.filter('visible', visible);

export default filtersModule;
