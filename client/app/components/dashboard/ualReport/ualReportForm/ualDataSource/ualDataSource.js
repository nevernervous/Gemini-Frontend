import angular from 'angular';
import ualDataSourceFactory from './ualDataSource.factory';
import ualDataSourceList from './ualDataSourceList/ualDataSourceList';
import lodash from 'lodash';

let ualDataSourceModule = angular.module('ualDataSource', [
    ualDataSourceList.name
])
.service("lodash", () => lodash)
.factory('ualDataSource', ualDataSourceFactory);

export default ualDataSourceModule;
