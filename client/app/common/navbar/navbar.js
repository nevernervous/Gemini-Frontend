import angular from 'angular';
import navbarComponent from './navbar.component';
import NavOptions from './navOptions/navOptions';

let navbarModule = angular.module('navbar', [
  NavOptions.name
])

.component('navbar', navbarComponent);

export default navbarModule;
