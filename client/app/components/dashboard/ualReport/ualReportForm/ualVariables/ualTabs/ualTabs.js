import angular from 'angular';
import ualTabsDirective from './ualTabs.directive';

let ualTabsModule = angular.module('ualTabs', [])

.directive('ualTabs', () => new ualTabsDirective());

export default ualTabsModule;
