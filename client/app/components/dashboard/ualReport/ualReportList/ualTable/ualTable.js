import angular from 'angular';
import ualTableComponent from './ualTable.component';
import ualColumn from './ualColumn/ualColumn';

let ualTableModule = angular.module('ualTable', [
    ualColumn.name
])

.component('ualTable', ualTableComponent);

export default ualTableModule;
