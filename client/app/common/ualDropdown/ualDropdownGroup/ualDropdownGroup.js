import angular from 'angular';
import ualDropdownGroupComponent from './ualDropdownGroup.component';

let ualDropdownGroupModule = angular.module('ualDropdownGroup', [])

.component('ualDropdownGroup', ualDropdownGroupComponent);

export default ualDropdownGroupModule;
