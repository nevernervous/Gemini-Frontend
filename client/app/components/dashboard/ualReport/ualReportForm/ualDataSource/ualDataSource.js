import angular from 'angular';
import ualDataSourceComponent from './ualDataSource.component';
import ualDataSourceChangeModal from './ualDataSourceChangeModal/ualDataSourceChangeModal';
import ualDataSourceItem from './ualDataSourceItem/ualDataSourceItem';

let ualDataSourceModule = angular.module('ualDataSource', [
  ualDataSourceChangeModal.name,
  ualDataSourceItem.name
])

.component('ualDataSource', ualDataSourceComponent);

export default ualDataSourceModule
