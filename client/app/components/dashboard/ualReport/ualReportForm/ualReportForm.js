import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ualDataSource from './ualDataSource/ualDataSource';
import ualVariables from './ualVariablesLayout/ualVariablesLayout';
import ualReportFormComponent from './ualReportForm.component';
import ualAgregationItem from './ualAgregationItem/ualAgregationItem';
import ualReportInput from './ualReportInput/ualReportInput';
import ualReportNameModal from './ualReportNameModal/ualReportNameModal';
import ualUnsafeReportModal from '../../ualUnsafeReportModal/ualUnsafeReportModal';
import ualFilters from './ualFilters/ualFilters';
import ualTimerModal from './ualTimerModal/ualTimerModal';


let ualReportFormModule = angular.module('ualReportForm', [
    uiRouter,
    ualVariables.name,
    ualReportInput.name,
    ualFilters.name,
    // MODALS
    ualDataSource.name,
    ualAgregationItem.name,
    ualReportNameModal.name,
    ualUnsafeReportModal.name,
    ualTimerModal.name,
])

.config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $stateProvider
        .state('dashboard.report-new', {
            url: '/report/new',
            template: '<ual-report-form></ual-report-form>'
        })
        .state('dashboard.report-edit', {
            url: '/report/:id',
            template: '<ual-report-form></ual-report-form>'
        });
})

.component('ualReportForm', ualReportFormComponent);

export default ualReportFormModule
