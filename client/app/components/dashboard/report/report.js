import angular from 'angular';
import uiRouter from 'angular-ui-router';
import reportComponent from './report.component';

let reportModule = angular.module('report', [
  uiRouter
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
