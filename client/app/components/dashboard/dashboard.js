import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dashboardComponent from './dashboard.component';
import LogoutModal from './logoutModal/logoutModal';
import ExpirationModal from './expirationModal/expirationModal';
import ualNavBar from './ualNavBar/ualNavBar';
import ualMainMenu from './ualMainMenu/ualMainMenu';
import ualReport from './ualReport/ualReport';

let dashboardModule = angular.module('dashboard', [
  uiRouter,
  // LAYOUT
  ualNavBar.name,
  ualMainMenu.name,
  // MODALS
  LogoutModal.name,
  ExpirationModal.name,  
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
