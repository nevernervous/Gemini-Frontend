import angular from 'angular';
import 'lodash';
import $ from 'jquery';
import customScroll from './vendors/jquery.mCustomScrollbar.concat.min.js';
import localStorage from './vendors/localStorage.js';
import uiRouter from 'angular-ui-router';
import deferredBootstrapper from 'angular-deferred-bootstrap';
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';
import Filters from './filters/filters';
import Constants from './app.constants';
import Interceptor from './app.interceptor';
import AppComponent from './app.component';

import './common/fonts/clanot/clanot.scss';

import './app.scss';
import 'normalize.css';

window.$ = $;
window.customScroll = customScroll;
window.customScroll(window.$);

angular.module('app', [
  uiRouter,
  Constants.name,
  Common.name,
  Components.name,
  Services.name,
  Filters.name
])

.config(($stateProvider, $httpProvider, $urlRouterProvider, ConfigurationProvider, SETTINGS, Properties) => {
  "ngInject";
  $urlRouterProvider.otherwise('/login');

  // LOAD SETTINGS
  let parameters = {};
  SETTINGS.data.forEach( item => {
    parameters[item.name] = item.value;
  });
  ConfigurationProvider.load(parameters);

  // SETUP FALLBACK
  if ( Properties.fallback ) {
    $httpProvider.interceptors.push(Interceptor);
  }
})
.component('app', AppComponent)


deferredBootstrapper.bootstrap({
  element: document.body,
  module: 'app',
  injectorModules: [Constants.name],
  bootstrapConfig: {
    strictDi: true
  },
  resolve: {
    SETTINGS: ['$http', 'Properties', function ($http, Properties) {
      return $http.get(Properties.endpoint + '/settings');
    }]
  }
});
