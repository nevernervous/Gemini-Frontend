import angular from 'angular';
import ualTimerModal from './ualtimerModal/ualTimerModal';
import ualReportViewComponent from './ualReportView.component';

let ualReportViewModule = angular.module('ualReportView', [
  ualTimerModal.name
])

.component('ualReportView', ualReportViewComponent);

export default ualReportViewModule;
