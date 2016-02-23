import angular from 'angular';
import Modal from './modal/modal';
import ualButton from './ualButton/ualButton';
import ualMenu from './ualMenu/ualMenu';
import ualTooltip from './ualTooltip/ualTooltip';

let commonModule = angular.module('app.common', [
  Modal.name,
  ualButton.name,
  ualMenu.name,
  ualTooltip.name
]);

export default commonModule;
