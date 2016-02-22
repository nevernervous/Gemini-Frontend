import angular from 'angular';
import ualDataSourceListComponent from './ualDataSourceList.component';

let ualDataSourceListModule = angular.module('ualDataSourceList', [])

.component('ualDataSourceList', ualDataSourceListComponent);

export default ualDataSourceListModule;
