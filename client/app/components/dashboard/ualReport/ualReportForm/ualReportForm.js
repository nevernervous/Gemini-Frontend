import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ualReportFormComponent from './ualReportForm.component';
import ualVariablesSelector from './ualVariablesSelector/ualVariablesSelector';

let ualReportFormModule = angular.module('ualReportForm', [
  uiRouter,
  ualVariablesSelector.name
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
