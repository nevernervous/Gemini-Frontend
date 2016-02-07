import angular from 'angular';
import uiRouter from 'angular-ui-router';
import <%= name %>Component from './<%= name %>.component';

let <%= name %>Module = angular.module('<%= name %>', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('<%= dashName %>', {
      url: '/<%= dashName %>',
      template: '<<%= dashName %>></<%= dashName %>>'
    });
})

.component('<%= name %>', <%= name %>Component);

export default <%= name %>Module;
