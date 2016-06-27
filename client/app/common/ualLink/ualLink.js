import angular from 'angular';
import ualLinkDirective from './ualLink.directive';

let ualLinkModule = angular.module('ualLink', [])

.directive('ualLink', () => new ualLinkDirective());

export default ualLinkModule;
