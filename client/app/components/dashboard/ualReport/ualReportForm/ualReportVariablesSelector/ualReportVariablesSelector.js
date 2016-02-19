import angular from 'angular';
import ualReportVariablesSelectorComponent from './ualReportVariablesSelector.component';

let ualReportVariablesSelectorModule = angular.module('ualReportVariablesSelector', [])

.component('ualReportVariablesSelector', ualReportVariablesSelectorComponent);

export default ualReportVariablesSelectorModule;
