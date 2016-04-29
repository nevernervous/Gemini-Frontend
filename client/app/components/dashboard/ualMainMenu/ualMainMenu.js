import angular from 'angular';
import ualMainMenuService from './ualMainMenu.service';
import ualMainMenuComponent from './ualMainMenu.component';

let ualMainMenuModule = angular.module('ualMainMenu', [])

.factory('ualMainMenu', ualMainMenuService)
.component('ualMainMenu', ualMainMenuComponent);

export default ualMainMenuModule;
