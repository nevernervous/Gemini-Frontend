import angular from 'angular';
import ualTabDirective from './ualTab.directive';

let ualTabModule = angular.module('ualTab', [])

.directive('ualTab', () => new ualTabDirective());

export default ualTabModule;
