import angular from 'angular';
import reportContextService from './reportContext.service';

let reportContextModule = angular.module('reportContext', [])

.factory('ReportContext', reportContextService);

export default reportContextModule;
