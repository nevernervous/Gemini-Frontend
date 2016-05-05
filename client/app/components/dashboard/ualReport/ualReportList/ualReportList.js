import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ualReportListComponent from './ualReportList.component';
import ualReportListDeleteReportModal from './ualReportListDeleteReportModal/ualReportListDeleteReportModal';
import ualTooltipService from '../../../../common/ualTooltip/ualTooltip.service';

let ualReportListModule = angular.module('ualReportList', [
  uiRouter,
  ualReportListDeleteReportModal.name
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('dashboard.report-list', {
      url: '/report/list',
      template: '<ual-report-list></ual-report-list>'
    });
})

.component('ualReportList', ualReportListComponent)
.factory('ualTooltipService',ualTooltipService);

export default ualReportListModule;

