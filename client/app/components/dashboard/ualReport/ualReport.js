import angular from 'angular';
import ualReportList from './ualReportList/ualReportList';
import ualReportForm from './ualReportForm/ualReportForm';
import ualDataSource from './ualDataSource/ualDataSource';

let ualReportModule = angular.module('ualReport', [
    ualDataSource.name,
    ualReportList.name,
    ualReportForm.name
])

export default ualReportModule;

