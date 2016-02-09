import angular from 'angular';
import mainMenuHandlerComponent from './mainMenuHandler.component';
import MainMenuService from '../mainMenuService/mainMenuService';

let mainMenuHandlerModule = angular.module('mainMenuHandler', [
  MainMenuService.name
])

.component('mainMenuHandler', mainMenuHandlerComponent);

export default mainMenuHandlerModule;
