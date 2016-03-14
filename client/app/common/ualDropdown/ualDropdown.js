import angular from 'angular';
import ualDropdownComponent from './ualDropdown.component';
import ualDropdownGroup from './ualDropdownGroup/ualDropdownGroup';
import ualDropdownItem from './ualDropdownItem/ualDropdownItem';

let ualDropdownModule = angular.module('ualDropdown', [
    ualDropdownGroup.name,
    ualDropdownItem.name
])

.component('ualDropdown', ualDropdownComponent);

export default ualDropdownModule;
