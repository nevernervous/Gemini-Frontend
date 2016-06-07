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
import './vendors/jquery.signalr-2.2.0.js';
import customScroll from './vendors/jquery.mCustomScrollbar.concat.min.js';
import localStorage from './vendors/localStorage.js';
import JtDro from './vendors/JtDro.js';
import uiRouter from 'angular-ui-router';
import deferredBootstrapper from 'angular-deferred-bootstrap';
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';
import Helpers from './helpers/helpers';
import Filters from './filters/filters';
import Constants from './app.constants';
import Interceptor from './app.interceptor';
import AppComponent from './app.component';
import '@iamadamjowett/angular-click-outside/clickoutside.directive';
import 'angular-q-spread/src/q-spread';
import Clusterize from 'clusterize.js';
import dotdotdot from 'jquery.dotdotdot';
import selectionModel from 'selection-model';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import './common/fonts/clanot/clanot.scss';
import './app.scss';
import 'normalize.css';

window.$ = $;
window.jQuery = $;
window.Clusterize = Clusterize;
window.customScroll = customScroll;
window.customScroll(window.$);

angular.module('app', [
  '$q-spread',
  'dragDrop',
  'angular-click-outside',
  uiRouter,
  Constants.name,
  Common.name,
  Components.name,
  Services.name,
  Helpers.name,
  Filters.name,
  'ngAnimate',
  'selectionModel',
  ngAnimate,
  ngAria,
  ngMaterial
])

.config(($stateProvider, $httpProvider, $urlRouterProvider, ConfigurationProvider, SETTINGS, Properties) => {
  "ngInject";
  $urlRouterProvider.otherwise('/login');

  // SHOW VERSION
  console.log('Gemini: ' + Properties.version);

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
.config(($mdThemingProvider) => {
  "ngInject";

  // http://www.google.com/design/spec/style/color.html#color-color-palette
  $mdThemingProvider.definePalette('primary', {
    '50': '#e3f2fd',
    '100': '#bbdefb',
    '200': '#90caf9',
    '300': '#64b5f6',
    '400': '#42a5f5',
    '500': '#002244', // DEFAULT
    '600': '#0a3d66', // HOVER
    '700': '#1976d2',
    '800': '#1565c0',
    '900': '#0d47a1',
    'A100': '#82b1ff',
    'A200': '#448aff',
    'A400': '#2979ff',
    'A700': '#2962ff',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 300 400 A100',
    'contrastStrongLightColors': '500 600 700 A200 A400 A700'
  });

  $mdThemingProvider.definePalette('secondary', {
    '50': '#e3f2fd',
    '100': '#bbdefb',
    '200': '#90caf9',
    '300': '#64b5f6',
    '400': '#42a5f5',
    '500': '#62a9e3', // DEFAULT
    '600': '#0a3d66', // HOVER
    '700': '#1976d2',
    '800': '#1565c0',
    '900': '#0d47a1',
    'A100': '#82b1ff',
    'A200': '#448aff',
    'A400': '#2979ff',
    'A700': '#2962ff',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 300 400 A100',
    'contrastStrongLightColors': '500 600 700 A200 A400 A700'
  });

  $mdThemingProvider.theme('default')
  .primaryPalette('primary');

  $mdThemingProvider.theme('secondary')
  .primaryPalette('secondary')

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
