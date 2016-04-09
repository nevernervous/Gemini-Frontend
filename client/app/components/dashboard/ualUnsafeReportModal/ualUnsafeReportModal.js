import angular from 'angular';
import ualReportService from '../ualReport/ualReport.service';
console.log(ualReportService);
import ualUnsafeReportModalFactory from './ualUnsafeReportModal.factory';

let ualUnsafeReportModalModule = angular.module('ualUnsafeReportModal', [
])

.factory('ualUnsafeReportModal', ualUnsafeReportModalFactory);

export default ualUnsafeReportModalModule;
