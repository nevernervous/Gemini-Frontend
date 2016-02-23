import angular from 'angular';
import ualDataSourceFactory from './ualDataSource.factory';
import ualDataSourceList from './ualDataSourceList/ualDataSourceList';

let ualDataSourceModule = angular.module('ualDataSource', [
    ualDataSourceList.name
])

.factory('ualDataSource', ualDataSourceFactory);

export default ualDataSourceModule;
