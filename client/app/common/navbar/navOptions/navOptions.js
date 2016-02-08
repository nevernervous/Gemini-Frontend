import angular from 'angular';
import navOptionsComponent from './navOptions.component';
import DropdownMenu from './dropdownMenu/dropdownMenu';

let navOptionsModule = angular.module('navOptions', [
  DropdownMenu.name
])

.component('navOptions', navOptionsComponent);

export default navOptionsModule;
