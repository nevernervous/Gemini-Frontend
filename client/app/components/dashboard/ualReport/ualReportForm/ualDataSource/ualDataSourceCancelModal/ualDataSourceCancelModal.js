import angular from 'angular';
import ualDataSourceCancelModalFactory from './ualDataSourceCancelModal.factory';

let ualDataSourceCancelModalModule = angular.module('ualDataSourceCancelModal', [
])

.factory('ualDataSourceCancelModal', ualDataSourceCancelModalFactory);

export default ualDataSourceCancelModalModule;
