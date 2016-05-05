import angular from 'angular';
import ualReportInputComponent from './ualReportInput.component';
import ualTooltipService from '../../../../../common/ualTooltip/ualTooltip.service';
console.log(ualReportInputComponent);
let ualReportInputModule = angular.module('ualReportInput', [
])

.component('ualReportInput', ualReportInputComponent)
.factory('ualTooltipService',ualTooltipService);

export default ualReportInputModule;
