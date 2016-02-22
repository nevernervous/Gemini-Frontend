import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dashboardComponent from './dashboard.component';
import ualNavBar from './ualNavBar/ualNavBar';
import ualMainMenu from './ualMainMenu/ualMainMenu';
import ualReport from './ualReport/ualReport';

let dashboardModule = angular.module('dashboard', [
  uiRouter,
  // LAYOUT
  ualNavBar.name,
  ualMainMenu.name,
  // CONTENT
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
