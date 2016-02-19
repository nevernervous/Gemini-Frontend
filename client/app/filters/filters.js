import angular from 'angular';
import secondstotime from './secondstotime/secondstotime';

let filtersModule = angular.module('filters', [])

filtersModule.filter('secondstotime', secondstotime);

export default filtersModule;
