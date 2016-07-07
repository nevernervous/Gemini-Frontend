import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ualDataSource from './ualDataSource/ualDataSource';
import ualVariables from './ualVariablesLayout/ualVariablesLayout';
import ualReportFormComponent from './ualReportForm.component';
import ualAgregationItem from './ualAgregationItem/ualAgregationItem';
import ualReportInput from './ualReportInput/ualReportInput';
import ualReportNameModal from './ualReportNameModal/ualReportNameModal';
import ualFilters from './ualFilters/ualFilters';
import ualTimerModal from './ualTimerModal/ualTimerModal';
import ualExecuteReportModal from './ualTimerModal/ualTimerModal';
import ualExecutedReportModal from './ualExecutedReportModal/ualExecutedReportModal';

let ualReportFormModule = angular.module('ualReportForm', [
  uiRouter,
  ualVariables.name,
  ualReportInput.name,
  ualFilters.name,
  ualDataSource.name,
  // MODALS
  ualAgregationItem.name,
  ualReportNameModal.name,
  ualTimerModal.name,
  ualExecutedReportModal.name
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('dashboard.report-new', {
      url: '/report/new',
      template: '<ual-report-form layout="column" layout-fill></ual-report-form>'
    })
    .state('dashboard.report-edit', {
      url: '/report/:id',
      template: '<ual-report-form layout="column" layout-fill></ual-report-form>'
    });
})

.component('ualReportForm', ualReportFormComponent);

export default ualReportFormModule
