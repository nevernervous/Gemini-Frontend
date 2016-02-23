import angular from 'angular';
import ualTabComponent from './ualTab.component';

let ualTabModule = angular.module('ualTab', [])

.component('ualTab', ualTabComponent);

export default ualTabModule;
