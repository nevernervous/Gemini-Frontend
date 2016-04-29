<<<<<<< HEAD
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
  ualTable.name
]);

export default commonModule;
=======
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
]);

export default commonModule;
>>>>>>> 83eb1d47c72147042cd3e6b6b3fe22ba1d67a335
