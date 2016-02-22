import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dashboardComponent from './dashboard.component';
import ualReport from './ualReport/ualReport';

let dashboardModule = angular.module('dashboard', [
  uiRouter,
  ualReport.name  
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      template: '<dashboard></dashboard>'
    });
})

.component('dashboard', dashboardComponent);

export default dashboardModule;
