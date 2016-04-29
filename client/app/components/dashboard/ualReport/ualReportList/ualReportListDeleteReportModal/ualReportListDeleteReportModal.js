import angular from 'angular';
import ualReportListDeleteReportModalFactory from './ualReportListDeleteReportModal.factory';

let ualReportListDeleteReportModalModule = angular.module('ualReportListDeleteReportModal', [])

.factory('ualReportListDeleteReportModal', ualReportListDeleteReportModalFactory);

export default ualReportListDeleteReportModalModule;