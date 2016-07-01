import angular from 'angular';
import ualExecutedReportModalFactory from './ualExecutedReportModal.factory';

let ualExecutedReportModalModule = angular.module('ualExecutedReportModal', [
])

.factory('ualExecutedReportModal', ualExecutedReportModalFactory);

export default ualExecutedReportModalModule;
