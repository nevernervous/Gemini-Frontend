import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';
import ngSanitize from 'angular-sanitize';


import ualModal from './ualModal/ualModal';
import ualCheckbox from './ualCheckbox/ualCheckbox';
import ualMenu from './ualMenu/ualMenu';
import ualPane from './ualPane/ualPane';
import ualTooltip from './ualTooltip/ualTooltip';
import ualDropdown from './ualDropdown/ualDropdown';
import ualResize from './ualResize/ualResize';
import ualRender from './ualRender/ualRender';
import ualMessageBanner from './ualMessageBanner/ualMessageBanner';
import ualTable from './ualTable/ualTable';
import ualSignalR from './ualSignalR/ualSignalR';
import ualClusterizeTable from './ualClusterizeTable/ualClusterizeTable';
import ualEllipsis from './ualEllipsis/ualEllipsis';
import ualAccordionGroup from './ualAccordionGroup/ualAccordionGroup';
import ualOnScroll from './ualOnScroll/ualOnScroll';
import ualActionLabel from './ualActionLabel/ualActionLabel';
import ualDraggable from './ualDraggable/ualDraggable';
import ualDroppable from './ualDroppable/ualDroppable';
import ualAutocomplete from './ualAutocomplete/ualAutocomplete';

// MATERIAL
import ualLoading from './ualLoading/ualLoading';
import ualToast from './ualToast/ualToast';
import ualButton from './ualButton/ualButton';
import ualButtonFlat from './ualButtonFlat/ualButtonFlat';
import ualInput from './ualInput/ualInput';
import ualMenuitem from './ualMenuitem/ualMenuitem';
import ualListitem from './ualListitem/ualListitem';
import ualDialog from './ualDialog/ualDialog';
import ualTabs from './ualTabs/ualTabs';

// CUSTOM
import ualTimepicker from './ualTimepicker/ualTimepicker';
import ualDatepicker from './ualDatepicker/ualDatepicker';


let commonModule = angular.module('app.common', [
  ngAnimate,
  ngAria,
  ngMaterial,
  ngSanitize,

  ualModal.name,
  ualCheckbox.name,
  ualMenu.name,
  ualPane.name,
  ualTooltip.name,
  ualDropdown.name,
  ualResize.name,
  ualRender.name,
  ualMessageBanner.name,
  ualTable.name,
  ualSignalR.name,
  ualClusterizeTable.name,
  ualEllipsis.name,
  ualAccordionGroup.name,
  ualOnScroll.name,
  ualActionLabel.name,
  ualDraggable.name,
  ualDroppable.name,
  ualAutocomplete.name,

  // MATERIAL
  ualButton.name,
  ualButtonFlat.name,
  ualInput.name,
  ualLoading.name,
  ualToast.name,
  ualMenuitem.name,
  ualListitem.name,
  ualDialog.name,
  ualTabs.name,

  // CUSTOM
  ualTimepicker.name,
  ualDatepicker.name
])
.config(($mdThemingProvider) => {
  "ngInject";

  // http://www.google.com/design/spec/style/color.html#color-color-palette
  $mdThemingProvider.definePalette('primary', {
    '50': '#c0ddf4',
    '100': '#8cbfea',
    '200': '#62a9e3',
    '300': '#3271b1',
    '400': '#0a3d66',
    '500': '#002244', // DEFAULT
    '600': '#0a3d66', // HOVER
    '700': '#3271b1',
    '800': '#62a9e3',
    '900': '#8cbfea',
    'A100': '#82b1ff',
    'A200': '#448aff',
    'A400': '#2979ff',
    'A700': '#cd202c',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 300 400 A100',
    'contrastStrongLightColors': '500 600 700 A200 A400 A700'
  });

  $mdThemingProvider.theme('default')
  .primaryPalette('primary');

});

export default commonModule;
