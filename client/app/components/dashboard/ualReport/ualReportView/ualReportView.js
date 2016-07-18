import angular from 'angular';
import ualReportViewComponent from './ualReportView.component';
import ualSlicerManagementModal from './ualSlicerManagementModal/ualSlicerManagementModal';

let ualReportViewModule = angular.module('ualReportView', [
  // MODALS
  ualSlicerManagementModal.name
])

.component('ualReportView', ualReportViewComponent);

export default ualReportViewModule;
