import angular from 'angular';
import dataSourceFactory from './dataSource.factory';

let dataSourceModule = angular.module('dataSource', [
])

.factory('dataSource', dataSourceFactory);

export default dataSourceModule;
