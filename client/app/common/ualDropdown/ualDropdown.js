import angular from 'angular';
import ualDropdownComponent from './ualDropdown.component';
import ualDropdownItem from './ualDropdownItem/ualDropdownItem';

let ualDropdownModule = angular.module('ualDropdown', [
    ualDropdownItem.name
])

.component('ualDropdown', ualDropdownComponent);

export default ualDropdownModule;
