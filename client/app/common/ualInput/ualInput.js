import angular from 'angular';
import ualInputComponent from './ualInput.component';

let ualInputModule = angular.module('ualInput', [])
.component('ualInput', ualInputComponent);

export default ualInputModule;
