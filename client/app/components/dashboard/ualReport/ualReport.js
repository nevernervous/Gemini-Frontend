import angular from 'angular';
import ualReportService from './ualReport.service'
import ualReportList from './ualReportList/ualReportList'
import ualReportForm from './ualReportForm/ualReportForm'

let ualReportModule = angular.module('ualReport', [
  ualReportList.name,
  ualReportForm.name
])

.service('ualReport', ualReportService);
    
export default ualReportModule;
