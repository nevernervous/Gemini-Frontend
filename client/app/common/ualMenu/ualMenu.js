import angular from 'angular';
import ualMenuItemComponent from './ualMenuItem/ualMenuItem.component';
import ualMenuComponent from './ualMenu.component';

let ualMenuModule = angular.module('ualMenu', [
])

.component('ualMenuItem', ualMenuItemComponent)
.component('ualMenu', ualMenuComponent);

export default ualMenuModule;
