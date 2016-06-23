import angular from 'angular';
import ualNavbarDirective from './ualNavbar.directive';

let ualNavbarModule = angular.module('ualNavbar', [])

.directive('ualNavbar', () => new ualNavbarDirective());

export default ualNavbarModule;
