import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ualDataSource from './ualDataSource/ualDataSource';
import ualVariables from './ualVariables/ualVariables';
import ualReportFormComponent from './ualReportForm.component';

let ualReportFormModule = angular.module('ualReportForm', [
  uiRouter,
  // MODALS
  ualDataSource.name,
  ualVariables.name
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('dashboard.report-new', {
        url: '/report/new',
        template: '<ual-report-form></ual-report-form>'
    })
    .state('dashboard.report-edit', {
        url: '/report/:id',
        template: '<ual-report-form></ual-report-form>'
    });
})

.component('ualReportForm', ualReportFormComponent);

export default ualReportFormModule;
