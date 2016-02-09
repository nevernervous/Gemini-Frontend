import angular from 'angular';
import Navbar from './navbar/navbar';
import MainMenu from './mainMenu/mainMenu';

let commonModule = angular.module('app.common', [
  Navbar.name, 
  MainMenu.name
]);

export default commonModule;
