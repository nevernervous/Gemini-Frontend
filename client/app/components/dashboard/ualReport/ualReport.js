import angular from 'angular';
import ualDataSourceList from './ualDataSourceList/ualDataSourceList';

let ualReportModule = angular.module('ualReport', [
    ualDataSourceList.name
]);

export default ualReportModule;