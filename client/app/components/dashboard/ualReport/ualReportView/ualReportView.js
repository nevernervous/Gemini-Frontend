import angular from 'angular';
import ualReportViewComponent from './ualReportView.component';

let ualReportViewModule = angular.module('ualReportView', [])

.component('ualReportView', ualReportViewComponent);

export default ualReportViewModule;
