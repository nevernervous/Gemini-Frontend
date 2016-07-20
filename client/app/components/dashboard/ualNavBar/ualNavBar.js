import angular from 'angular';
import ualNavbarComponent from './ualNavbar.component';

let ualNavbarModule = angular.module('ualNavbar', [])

.component('ualNavbar', ualNavbarComponent);

export default ualNavbarModule;
