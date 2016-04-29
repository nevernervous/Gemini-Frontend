import angular from 'angular';
import ualDataSourceChangeModalFactory from './ualDataSourceChangeModal.factory';

let ualDataSourceChangeModalModule = angular.module('ualDataSourceChangeModal', [
])

.factory('ualDataSourceChangeModal', ualDataSourceChangeModalFactory);

export default ualDataSourceChangeModalModule;
