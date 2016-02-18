import angular from 'angular';
import uiRouter from 'angular-ui-router';
import deferredBootstrapper from 'angular-deferred-bootstrap';
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';
import Filters from './filters/filters';
import Constants from './app.constants';
import AppComponent from './app.component';

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

.config(($stateProvider, $urlRouterProvider, ConfigurationProvider, SETTINGS) => {
  "ngInject";

  $urlRouterProvider.otherwise('/login');

  let parameters = {};
  SETTINGS.parameters.forEach( item => {
    parameters[item.name] = item.value;
  });
  ConfigurationProvider.load(parameters);
  
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