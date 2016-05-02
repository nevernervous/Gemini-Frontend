import angular from 'angular';
import ualReportNameModalFactory from './ualReportNameModal.factory';

let ualReportNameModalModule = angular.module('ualReportNameModal', [
])

.factory('ualReportNameModal', ualReportNameModalFactory);

export default ualReportNameModalModule;


