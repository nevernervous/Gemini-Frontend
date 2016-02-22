import angular from 'angular';
import dropdownMenuComponent from './dropdownMenu.component';
import ualMenu from '../../../ualMenu/ualMenu';

let dropdownMenuModule = angular.module('dropdownMenu', [
  ualMenu.name
])

.component('dropdownMenu', dropdownMenuComponent);

export default dropdownMenuModule;
