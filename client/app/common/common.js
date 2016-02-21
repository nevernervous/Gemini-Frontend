import angular from 'angular';
import Navbar from './navbar/navbar';
import MainMenu from './mainMenu/mainMenu';
import Modal from './modal/modal';
import ualButton from './ualButton/ualButton';
import ualMenu from './ualMenu/ualMenu';

let commonModule = angular.module('app.common', [
  Navbar.name, 
  MainMenu.name,
  Modal.name,
  ualButton.name,
  ualMenu.name
]);

export default commonModule;
