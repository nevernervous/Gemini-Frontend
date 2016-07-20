import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ualReportListComponent from './ualReportList.component';

let ualReportListModule = angular.module('ualReportList', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('dashboard.report-list', {
      url: '/report/list',
      template: '<ual-report-list flex layout="column" layout-fill></ual-report-list>'
    });
})

.component('ualReportList', ualReportListComponent);

export default ualReportListModule;
