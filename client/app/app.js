import angular from 'angular';
import 'lodash';
//import jQuery from 'jquery';
import uiRouter from 'angular-ui-router';
import deferredBootstrapper from 'angular-deferred-bootstrap';
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';
import Filters from './filters/filters';
import Constants from './app.constants';
import Interceptor from './app.interceptor';
import AppComponent from './app.component';

//window.$ = window.jQuery = jQuery;

import './app.scss';
import 'normalize.css';

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