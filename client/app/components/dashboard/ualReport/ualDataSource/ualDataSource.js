import angular from 'angular';
import ualDataSourceFactory from './ualDataSource.factory';

let ualDataSourceModule = angular.module('ualDataSource', [
])

.factory('ualDataSource', ualDataSourceFactory);

export default ualDataSourceModule;
