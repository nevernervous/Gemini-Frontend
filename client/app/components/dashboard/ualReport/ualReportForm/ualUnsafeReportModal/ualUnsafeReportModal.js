import angular from 'angular';
import ReportService from '../../../../../services/report/report';

import ualUnsafeReportModalFactory from './ualUnsafeReportModal.factory';

let ualUnsafeReportModalModule = angular.module('ualUnsafeReportModal', [
])

.factory('ualUnsafeReportModal', ualUnsafeReportModalFactory);

export default ualUnsafeReportModalModule;
