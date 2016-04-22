import angular from 'angular';
import ualTableComponent from './ualTable.component';
import ualReportItem from './ualReportItem/ualReportItem';

let ualTableModule = angular.module('ualTable', [
  ualReportItem.name
])

.component('ualTable', ualTableComponent);

export default ualTableModule;
