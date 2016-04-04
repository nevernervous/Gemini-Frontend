import angular from 'angular';
import ualColumnComponent from './ualColumn.component';

let ualColumnModule = angular.module('ualColumn', [])

.component('ualColumn', ualColumnComponent);

export default ualColumnModule;
