import angular from 'angular';
import ualDataSourceFactory from './ualDataSource.factory';
import ualDataSourceChangeModal from './ualDataSourceChangeModal/ualDataSourceChangeModal';

let ualDataSourceModule = angular.module('ualDataSource', [
  ualDataSourceChangeModal.name
])

.factory('ualDataSource', ualDataSourceFactory);

export default ualDataSourceModule;
