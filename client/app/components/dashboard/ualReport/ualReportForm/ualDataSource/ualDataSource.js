import angular from 'angular';
import ualDataSourceFactory from './ualDataSource.factory';
import ualDataSourceChangeModal from './ualDataSourceChangeModal/ualDataSourceChangeModal';
import ualDataSourceGroup from './ualDataSourceGroup/ualDataSourceGroup';
import ualDataSourceLabel from './ualDataSourceLabel/ualDataSourceLabel';

let ualDataSourceModule = angular.module('ualDataSource', [
        ualDataSourceChangeModal.name,
        ualDataSourceGroup.name,
        ualDataSourceLabel.name
])
.factory('ualDataSource', ualDataSourceFactory);

export default ualDataSourceModule;