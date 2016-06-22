import angular from 'angular';
import ualSidenavService from './ualSidenav.service';
import ualSidenavDirective from './ualSidenav.directive';

let ualSidenavModule = angular.module('ualSidenav', [])

.factory('ualSidenav', ualSidenavService)
.directive('ualSidenav', () => new ualSidenavDirective());

export default ualSidenavModule;
