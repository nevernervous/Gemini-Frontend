import angular from 'angular';
import mainMenuComponent from './mainMenu.component';
import MenuItem from '../menuItem/menuItem';
import MainMenuHandler from './mainMenuHandler/mainMenuHandler';
import MainMenuService from './mainMenuService/mainMenuService';

let mainMenuModule = angular.module('mainMenu', [
  MenuItem.name,
  MainMenuHandler.name,
  MainMenuService.name
])

.component('mainMenu', mainMenuComponent);

export default mainMenuModule;
