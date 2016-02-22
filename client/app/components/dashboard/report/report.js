import angular from 'angular';
import uiRouter from 'angular-ui-router';
import reportComponent from './report.component';
import ualReport from '../ualReport/ualReport';

let reportModule = angular.module('report', [
  uiRouter,
  ualReport.name
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('dashboard.report', {
      url: '/report',
      template: '<report></report>'
    });
})

.component('report', reportComponent);

export default reportModule;
