import angular from 'angular';
import <%= name %>Service from './<%= name %>.service';

let <%= name %>Module = angular.module('<%= name %>', [])

.factory('<%= name %>', <%= name %>Service);

export default <%= name %>Module;
