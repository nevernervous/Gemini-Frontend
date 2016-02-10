import angular from 'angular';
import Navbar from './navbar/navbar';
import MainMenu from './mainMenu/mainMenu';
import Modal from './modal/modal';

let commonModule = angular.module('app.common', [
  Navbar.name, 
  MainMenu.name,
  Modal.name
]);

export default commonModule;
