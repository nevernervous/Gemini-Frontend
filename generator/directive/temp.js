import angular from 'angular';
import <%= name %>Directive from './<%= name %>.directive';

let <%= name %>Module = angular.module('<%= name %>', [])

.directive('<%= name %>', () => new <%= name %>Directive());

export default <%= name %>Module;
