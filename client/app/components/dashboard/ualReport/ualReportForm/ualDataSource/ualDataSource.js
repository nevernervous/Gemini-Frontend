import angular from 'angular';
import ualDataSourceFactory from './ualDataSource.factory';
import ualDataSourceGroup from './ualDataSourceGroup/ualDataSourceGroup';

let ualDataSourceModule = angular.module('ualDataSource', [
    ualDataSourceGroup.name
])
.factory('ualDataSource', ualDataSourceFactory);

export default ualDataSourceModule;
