import angular from 'angular';
import ualTabsDirective from './ualTabs.directive';
import ualTab from './ualTab/ualTab';

let ualTabsModule = angular.module('ualTabs', [
  ualTab.name
])

.directive('ualTabs', () => new ualTabsDirective());

export default ualTabsModule;
