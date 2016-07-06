import angular from 'angular';
import reportService from './report.service';
import executeReportService from './executeReport.service';
import reportObjectService from './report.object';
import reportTransform from './report.transform';

let reportModule = angular.module('report', [])

.factory('Report', reportService)
.factory('ExecuteReport', executeReportService)
.factory('ReportObject', reportObjectService)
.factory('ReportTransform', reportTransform);

export default reportModule;
