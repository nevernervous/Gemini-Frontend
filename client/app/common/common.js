import angular from 'angular';
import ualModal from './ualModal/ualModal';
import ualButton from './ualButton/ualButton';
import ualCheckbox from './ualCheckbox/ualCheckbox';
import ualMenu from './ualMenu/ualMenu';
import ualPane from './ualPane/ualPane';
import ualTooltip from './ualTooltip/ualTooltip';
import ualInput from './ualInput/ualInput';
import ualDropdown from './ualDropdown/ualDropdown';

let commonModule = angular.module('app.common', [
  ualModal.name,
  ualButton.name,
  ualCheckbox.name,
  ualMenu.name,
  ualPane.name,
  ualTooltip.name,
  ualInput.name,
  ualDropdown.name
]);

export default commonModule;
