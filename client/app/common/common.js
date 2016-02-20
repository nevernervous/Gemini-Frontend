import angular from 'angular';
import Navbar from './navbar/navbar';
import MainMenu from './mainMenu/mainMenu';
import Modal from './modal/modal';
import ualButton from './ualButton/ualButton';

let commonModule = angular.module('app.common', [
  Navbar.name, 
  MainMenu.name,
  Modal.name,
  ualButton.name
]);

export default commonModule;
