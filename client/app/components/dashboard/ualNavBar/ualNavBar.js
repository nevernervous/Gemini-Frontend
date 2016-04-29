import angular from 'angular';
import ualNavBarService from './ualNavBar.service';
import ualNavBarComponent from './ualNavBar.component';

let ualNavBarModule = angular.module('ualNavBar', [])

.factory('ualNavBar', ualNavBarService)
.component('ualNavBar', ualNavBarComponent);

export default ualNavBarModule;
