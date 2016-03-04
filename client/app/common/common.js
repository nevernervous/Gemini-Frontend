import angular from 'angular';
import ualModal from './ualModal/ualModal';
import ualButton from './ualButton/ualButton';
import ualMenu from './ualMenu/ualMenu';
import ualPane from './ualPane/ualPane';
import ualTooltip from './ualTooltip/ualTooltip';
import ualInput from './ualInput/ualInput';

let commonModule = angular.module('app.common', [
  ualModal.name,
  ualButton.name,
  ualMenu.name,
  ualPane.name,
  ualTooltip.name,
  ualInput.name
]);

export default commonModule;
