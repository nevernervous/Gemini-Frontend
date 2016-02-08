import angular from 'angular';
import dropdownMenuComponent from './dropdownMenu.component';

let dropdownMenuModule = angular.module('dropdownMenu', [])

.component('dropdownMenu', dropdownMenuComponent);

export default dropdownMenuModule;
