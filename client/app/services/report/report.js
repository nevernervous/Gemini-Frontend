import angular from 'angular';
import reportService from './report.service';
import reportObjectService from './report.object';

let reportModule = angular.module('report', [])

.factory('Report', reportService)
.factory('ReportObject', reportObjectService);

export default reportModule;
