import angular from 'angular';
import ualModal from './ualModal/ualModal';
import ualButton from './ualButton/ualButton';
import ualCheckbox from './ualCheckbox/ualCheckbox';
import ualMenu from './ualMenu/ualMenu';
import ualPane from './ualPane/ualPane';
import ualTooltip from './ualTooltip/ualTooltip';
import ualScroll from './ualScroll/ualScroll';
import ualInput from './ualInput/ualInput';
import ualDropdown from './ualDropdown/ualDropdown';
import ualResize from './ualResize/ualResize';
import ualRender from './ualRender/ualRender';
import ualMessageBanner from './ualMessageBanner/ualMessageBanner';
import ualTab from './ualTab/ualTab';
import ualTabs from './ualTabs/ualTabs';
import ualTable from './ualTable/ualTable';
import ualSignalR from './ualSignalR/ualSignalR';

let commonModule = angular.module('app.common', [
  ualModal.name,
  ualButton.name,
  ualCheckbox.name,
  ualMenu.name,
  ualPane.name,
  ualTooltip.name,
  ualDropdown.name,
  ualScroll.name,
  ualInput.name,
  ualResize.name,
  ualRender.name,
  ualMessageBanner.name,
  ualTab.name,
  ualTabs.name,
  ualTable.name,
  ualSignalR.name

]);

export default commonModule;
