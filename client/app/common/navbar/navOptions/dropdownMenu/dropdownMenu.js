import angular from 'angular';
import dropdownMenuComponent from './dropdownMenu.component';
import MenuItem from '../../../menuItem/menuItem';

let dropdownMenuModule = angular.module('dropdownMenu', [
  MenuItem.name
])

.component('dropdownMenu', dropdownMenuComponent);

export default dropdownMenuModule;
