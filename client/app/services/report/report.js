import angular from 'angular';
import reportService from './report.service';
import reportObjectService from './report.object';
import reportTransform from './report.transform';

let reportModule = angular.module('report', [])

.factory('Report', reportService)
.factory('ReportObject', reportObjectService)
.factory('ReportTransform', reportTransform);

export default reportModule;
