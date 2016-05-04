    // Opera 8.0+
window.isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Firefox 1.0+
window.isFirefox = typeof InstallTrigger !== 'undefined';
    // At least Safari 3+: "[object HTMLElementConstructor]"
window.isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // Internet Explorer 6-11
window.isIE = /*@cc_on!@*/false || !!document.documentMode;
    // Edge 20+
window.isEdge = !isIE && !!window.StyleMedia;
    // Chrome 1+
window.isChrome = !!window.chrome && !!window.chrome.webstore;
    // Blink engine detection
window.isBlink = (isChrome || isOpera) && !!window.CSS;

import angular from 'angular';
import angularAnimate from 'angular-animate';
import 'lodash';
import $ from 'jquery';
import customScroll from './vendors/jquery.mCustomScrollbar.concat.min.js';
import localStorage from './vendors/localStorage.js';
import './vendors/jquery.signalr-2.2.0.js';
import JtDro from './vendors/JtDro.js';
import uiRouter from 'angular-ui-router';
import deferredBootstrapper from 'angular-deferred-bootstrap';
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';
import Filters from './filters/filters';
import Constants from './app.constants';
import Interceptor from './app.interceptor';
import AppComponent from './app.component';
import '@iamadamjowett/angular-click-outside/clickoutside.directive';
import 'angular-q-spread/src/q-spread';

import './common/fonts/clanot/clanot.scss';

import './app.scss';
import 'normalize.css';

window.$ = $;
window.customScroll = customScroll;
window.customScroll(window.$);
console.log("JtDro: " + !!JtDro);

angular.module('app', [
  '$q-spread',
  'dragDrop',
  'angular-click-outside',
  uiRouter,
  Constants.name,
  Common.name,
  Components.name,
  Services.name,
  Filters.name,
  'ngAnimate'
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
