import angular from 'angular';
import ualDataSourceFactory from './ualDataSource.factory';
import ualDataSourceChangeModal from './ualDataSourceChangeModal/ualDataSourceChangeModal';
import ualDataSourceGroup from './ualDataSourceGroup/ualDataSourceGroup';

let ualDataSourceModule = angular.module('ualDataSource', [
  ualDataSourceChangeModal.name,
  ualDataSourceGroup.name
])
.factory('ualDataSource', ualDataSourceFactory);

export default ualDataSourceModule;
