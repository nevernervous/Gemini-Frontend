import angular from 'angular';
import ualDropdownComponent from './ualDropdown.component';

let ualDropdownModule = angular.module('ualDropdown', [])

.component('ualDropdown', ualDropdownComponent);

export default ualDropdownModule;
