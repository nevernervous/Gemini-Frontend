import angular from 'angular';
import ualReportItemComponent from './ualReportItem.component';

let ualReportItemModule = angular.module('ualReportItem', [])

.component('ualReportItem', ualReportItemComponent);

export default ualReportItemModule;
