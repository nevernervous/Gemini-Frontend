import angular from 'angular';
import ualReportInputComponent from './ualReportInput.component';
console.log(ualReportInputComponent);
let ualReportInputModule = angular.module('ualReportInput', [
])

.component('ualReportInput', ualReportInputComponent);

export default ualReportInputModule;
