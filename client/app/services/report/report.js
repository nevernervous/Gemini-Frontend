import angular from 'angular';
import reportService from './report.service';

let reportModule = angular.module('report', [])

.factory('Report', reportService);

export default reportModule;
