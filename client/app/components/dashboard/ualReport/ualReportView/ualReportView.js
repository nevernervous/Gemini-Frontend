import angular from 'angular';
import ualReportViewComponent from './ualReportView.component';
import ualSelectVariablesToSliceModal from './ualSelectVariablesToSliceModal/ualSelectVariablesToSliceModal';

let ualReportViewModule = angular.module('ualReportView', [
  // MODALS
  ualSelectVariablesToSliceModal.name
])

.component('ualReportView', ualReportViewComponent);

export default ualReportViewModule;
