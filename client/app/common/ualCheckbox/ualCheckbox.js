import angular from 'angular';
import ualCheckboxComponent from './ualCheckbox.component';

let ualCheckboxModule = angular.module('ualCheckbox', [])

.component('ualCheckbox', ualCheckboxComponent);

export default ualCheckboxModule;
