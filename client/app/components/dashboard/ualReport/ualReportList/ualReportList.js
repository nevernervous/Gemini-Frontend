import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ualReportListComponent from './ualReportList.component';
import ualTable from './ualTable/ualTable';

let ualReportListModule = angular.module('ualReportList', [
  uiRouter,
  ualTable.name
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('dashboard.report-list', {
      url: '/report/list',
      template: '<ual-report-list></ual-report-list>'
    });
})

.component('ualReportList', ualReportListComponent);

export default ualReportListModule;
