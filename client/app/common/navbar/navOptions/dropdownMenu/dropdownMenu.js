import angular from 'angular';
import dropdownMenuComponent from './dropdownMenu.component';
import MenuItem from '../../../menuItem/menuItem';

let dropdownMenuModule = angular.module('dropdownMenu', [])

.component('dropdownMenu', dropdownMenuComponent);

export default dropdownMenuModule;
