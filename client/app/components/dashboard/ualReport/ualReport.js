import angular from 'angular';
import ualReportList from './ualReportList/ualReportList'
import ualReportForm from './ualReportForm/ualReportForm'
import ualDataSourceList from './ualDataSourceList/ualDataSourceList';

let ualReportModule = angular.module('ualReport', [
    ualReportList.name,
    ualReportForm.name,
    ualDataSourceList.name
])

export default ualReportModule;

