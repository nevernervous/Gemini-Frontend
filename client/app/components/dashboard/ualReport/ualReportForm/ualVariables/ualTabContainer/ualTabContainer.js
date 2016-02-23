import angular from 'angular';
import ualTabContainerComponent from './ualTabContainer.component';
import ualTab from '../ualTab/ualTab';

let ualTabContainerModule = angular.module('ualTabContainer', [
    ualTab.name
])

.component('ualTabContainer', ualTabContainerComponent);

export default ualTabContainerModule;
