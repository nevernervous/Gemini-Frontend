import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dashboardComponent from './dashboard.component';
import ExpirationModal from './expirationModal/expirationModal';
import ualNavbar from './ualNavbar/ualNavbar';
import ualSidenav from './ualSidenav/ualSidenav';
import ualReport from './ualReport/ualReport';

let dashboardModule = angular.module('dashboard', [
  uiRouter,
  // LAYOUT
  ualNavbar.name,
  ualSidenav.name,
  // MODALS
  ExpirationModal.name,
  // CONTENT
  ualReport.name
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      template: '<dashboard layout="column"></dashboard>'
    });
})

.component('dashboard', dashboardComponent);

export default dashboardModule;
