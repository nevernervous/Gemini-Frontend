<<<<<<< HEAD
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ualReportListComponent from './ualReportList.component';
import ualReportListDeleteReportModal from './ualReportListDeleteReportModal/ualReportListDeleteReportModal';
import ualLabelCount from './ualLabelCount/ualLabelCount';

let ualReportListModule = angular.module('ualReportList', [
  uiRouter,
  ualReportListDeleteReportModal.name,
  ualLabelCount.name
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('dashboard.report-list', {
      url: '/report/list',
      template: '<ual-report-list></ual-report-list>'
    });
})

.component('ualReportList', ualReportListComponent);

export default ualReportListModule;
=======
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ualReportListComponent from './ualReportList.component';
import ualTable from './ualTable/ualTable';
import ualReportListDeleteReportModal from './ualReportListDeleteReportModal/ualReportListDeleteReportModal';

let ualReportListModule = angular.module('ualReportList', [
  uiRouter,
  ualTable.name,
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

.component('ualReportList', ualReportListComponent);

export default ualReportListModule;
>>>>>>> 83eb1d47c72147042cd3e6b6b3fe22ba1d67a335
