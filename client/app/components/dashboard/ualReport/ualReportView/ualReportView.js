import angular from 'angular';
import ualTimerModal from './ualtimerModal/ualTimerModal';
import ualReportViewComponent from './ualReportView.component';
import ualSlicerManagementModal from './ualSlicerManagementModal/ualSlicerManagementModal';

let ualReportViewModule = angular.module('ualReportView', [
  // MODALS
  ualSlicerManagementModal.name,
  ualTimerModal.name
])

.component('ualReportView', ualReportViewComponent);

export default ualReportViewModule;
