import angular from 'angular';
import ualNavBarComponent from './ualNavBar.component';

let ualNavBarModule = angular.module('ualNavBar', [])

.component('ualNavBar', ualNavBarComponent);

export default ualNavBarModule;
