import angular from 'angular';
import ualDropdownItemComponent from './ualDropdownItem.component';

let ualDropdownItemModule = angular.module('ualDropdownItem', [])

.component('ualDropdownItem', ualDropdownItemComponent);

export default ualDropdownItemModule;
