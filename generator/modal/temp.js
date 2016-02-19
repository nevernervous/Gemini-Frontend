import angular from 'angular';
import <%= name %>Factory from './<%= name %>.factory';

let <%= name %>Module = angular.module('<%= name %>', [
])

.factory('<%= name %>', <%= name %>Factory);

export default <%= name %>Module;
