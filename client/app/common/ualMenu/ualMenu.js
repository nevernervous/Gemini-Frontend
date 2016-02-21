import angular from 'angular';
import ualMenuComponent from './ualMenu.component';
import ualMenuItem from './ualMenuItem/ualMenuItem';

let ualMenuModule = angular.module('ualMenu', [
  ualMenuItem.name
])

.component('ualMenu', ualMenuComponent);

export default ualMenuModule;
