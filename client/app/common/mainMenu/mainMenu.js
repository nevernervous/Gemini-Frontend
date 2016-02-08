import angular from 'angular';
import mainMenuComponent from './mainMenu.component';

let mainMenuModule = angular.module('mainMenu', [])

.component('mainMenu', mainMenuComponent);

export default mainMenuModule;
