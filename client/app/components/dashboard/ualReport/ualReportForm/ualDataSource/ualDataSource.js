import angular from 'angular';
import ualDataSourceComponent from './ualDataSource.component';
import ualDataSourceCancelModal from './ualDataSourceCancelModal/ualDataSourceCancelModal';
import ualDataSourceChangeModal from './ualDataSourceChangeModal/ualDataSourceChangeModal';
import ualDataSourceItem from './ualDataSourceItem/ualDataSourceItem';
import ualDataSourceLabel from './ualDataSourceLabel/ualDataSourceLabel';

let ualDataSourceModule = angular.module('ualDataSource', [

  ualDataSourceCancelModal.name,
  ualDataSourceItem.name,
  ualDataSourceLabel.name,
  ualDataSourceChangeModal.name
])

.component('ualDataSource', ualDataSourceComponent);

export default ualDataSourceModule
