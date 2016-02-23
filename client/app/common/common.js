import angular from 'angular';
import ualModal from './ualModal/ualModal';
import ualButton from './ualButton/ualButton';
import ualMenu from './ualMenu/ualMenu';
import ualTooltip from './ualTooltip/ualTooltip';

let commonModule = angular.module('app.common', [
  ualModal.name,
  ualButton.name,
  ualMenu.name,
  ualTooltip.name
]);

export default commonModule;
