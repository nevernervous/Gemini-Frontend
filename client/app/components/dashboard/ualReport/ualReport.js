import angular from 'angular';
import ualReportList from './ualReportList/ualReportList'
import ualReportForm from './ualReportForm/ualReportForm'
import ualDataSourceList from './ualDataSourceList/ualDataSourceList';
import ualDataSource from './ualDataSource/ualDataSource';

let ualReportModule = angular.module('ualReport', [
    ualDataSource.name,
    ualReportList.name,
    ualReportForm.name,
    ualDataSourceList.name
])

export default ualReportModule;

