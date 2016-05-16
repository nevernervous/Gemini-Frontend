import angular from 'angular';
import ualReportInputComponent from './ualReportInput.component';

let ualReportInputModule = angular.module('ualReportInput', [])

.component('ualReportInput', ualReportInputComponent);

export default ualReportInputModule;
