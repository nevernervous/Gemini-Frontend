import angular from 'angular';
import <%= name %>Service from './<%= name %>.service';

let <%= name %>Module = angular.module('<%= name %>', [])

.factory('<%= upCaseName %>', <%= name %>Service);

export default <%= name %>Module;
