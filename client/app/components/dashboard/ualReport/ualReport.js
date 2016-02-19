import angular from 'angular';
import ualReportList from './ualReportList/ualReportList';
import ualReportForm from './ualReportForm/ualReportForm';

let ualReportModule = angular.module('ualReport', [
  ualReportList.name,
  ualReportForm.name
])

export default ualReportModule;
