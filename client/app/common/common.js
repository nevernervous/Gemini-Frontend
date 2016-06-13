import angular from 'angular';
import ualModal from './ualModal/ualModal';
import ualCheckbox from './ualCheckbox/ualCheckbox';
import ualMenu from './ualMenu/ualMenu';
import ualPane from './ualPane/ualPane';
import ualTooltip from './ualTooltip/ualTooltip';
import ualScroll from './ualScroll/ualScroll';
import ualDropdown from './ualDropdown/ualDropdown';
import ualResize from './ualResize/ualResize';
import ualRender from './ualRender/ualRender';
import ualMessageBanner from './ualMessageBanner/ualMessageBanner';
import ualTabs from './ualTabs/ualTabs';
import ualTable from './ualTable/ualTable';
import ualSignalR from './ualSignalR/ualSignalR';
import ualClusterizeTable from './ualClusterizeTable/ualClusterizeTable';
import ualEllipsis from './ualEllipsis/ualEllipsis';
import ualAccordionGroup from './ualAccordionGroup/ualAccordionGroup';
import ualOnScroll from './ualOnScroll/ualOnScroll';

// MATERIAL
import ualLoading from './ualLoading/ualLoading';
import ualToast from './ualToast/ualToast';
import ualButton from './ualButton/ualButton';
import ualInput from './ualInput/ualInput';

let commonModule = angular.module('app.common', [
  ualModal.name,
  ualCheckbox.name,
  ualMenu.name,
  ualPane.name,
  ualTooltip.name,
  ualDropdown.name,
  ualScroll.name,
  ualResize.name,
  ualRender.name,
  ualMessageBanner.name,
  ualTabs.name,
  ualTable.name,
  ualSignalR.name,
  ualClusterizeTable.name,
  ualEllipsis.name,
  ualAccordionGroup.name,
  ualOnScroll.name,
  
  // MATERIAL
  ualButton.name,
  ualInput.name,
  ualLoading.name,
  ualToast.name
]);

export default commonModule;
