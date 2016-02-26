import angular from 'angular';
import ualDataSourceFactory from './ualDataSource.factory';
import ualDataSourceChangeModal from './ualDataSourceChangeModal/ualDataSourceChangeModal';
import ualDataSourceLabel from './ualDataSourceLabel/ualDataSourceLabel';

let ualDataSourceModule = angular.module('ualDataSource', [
  ualDataSourceChangeModal.name,
  ualDataSourceLabel.name
])

.factory('ualDataSource', ualDataSourceFactory);

export default ualDataSourceModule;
