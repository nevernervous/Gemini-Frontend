import angular from 'angular';
import angularFilter from 'angular-filter';
import secondstotime from './secondstotime/secondstotime';

let filtersModule = angular.module('filters', [
  'angular.filter'
])
filtersModule.filter('secondstotime', secondstotime);

export default filtersModule;
