import angular from 'angular';
import Modal from './modal/modal';
import ualButton from './ualButton/ualButton';
import ualMenu from './ualMenu/ualMenu';

let commonModule = angular.module('app.common', [
  Modal.name,
  ualButton.name,
  ualMenu.name
]);

export default commonModule;
