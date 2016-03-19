import angular from 'angular';
import ualDataSourceFactory from './ualDataSource.factory';
import ualDataSourceCancelModal from './ualDataSourceCancelModal/ualDataSourceCancelModal';
import ualDataSourceChangeModal from './ualDataSourceChangeModal/ualDataSourceChangeModal';
import ualDataSourceGroup from './ualDataSourceGroup/ualDataSourceGroup';
import ualDataSourceLabel from './ualDataSourceLabel/ualDataSourceLabel';
import ualOnLastItem from './ualOnLastItem/ualOnLastItem';

let ualDataSourceModule = angular.module('ualDataSource', [
  ualDataSourceCancelModal.name,
  ualDataSourceChangeModal.name,
  ualDataSourceGroup.name,
  ualDataSourceLabel.name,
  ualOnLastItem.name
])
.factory('ualDataSource', ualDataSourceFactory);

export default ualDataSourceModule;
