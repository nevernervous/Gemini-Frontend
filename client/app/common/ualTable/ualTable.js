import angular from 'angular';
import ualTableComponent from './ualTable.component';

let ualTableModule = angular.module('ualTable', [])

.component('ualTable', ualTableComponent);

export default ualTableModule;

