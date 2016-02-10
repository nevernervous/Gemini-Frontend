import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';
import Filters from './filters/filters';
import AppComponent from './app.component';

import './app.scss';
import 'normalize.css';

angular.module('app', [
  uiRouter,
  Common.name,
  Components.name,
  Services.name,
  Filters.name
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/login');

})

.component('app', AppComponent);
