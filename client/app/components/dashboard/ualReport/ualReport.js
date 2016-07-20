import angular from 'angular';
import ualReportList from './ualReportList/ualReportList';
import ualReportForm from './ualReportForm/ualReportForm';
import ualReportView from './ualReportView/ualReportView';

let ualReportModule = angular.module('ualReport', [
  ualReportList.name,
  ualReportForm.name,
  ualReportView.name
])
  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $stateProvider
      .state('dashboard.report-form', {
        url: '/report/:id',
        template: '<ual-report-form></ual-report-form>'
      })
      .state('dashboard.report-view', {
        url: '/report/view/:id',
        template: '<ual-report-view></ual-report-view>'
      });
  });
export default ualReportModule;
