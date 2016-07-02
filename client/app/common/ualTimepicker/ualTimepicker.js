import angular from 'angular';
import ualTimepickerComponent from './ualTimepicker.component';

let ualTimepickerModule = angular.module('ualTimepicker', [])

.component('ualTimepicker', ualTimepickerComponent);

export default ualTimepickerModule;
