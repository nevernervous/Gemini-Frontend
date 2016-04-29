import angular from 'angular';
import ualDataSourceLabelComponent from './ualDataSourceLabel.component';

let ualDataSourceLabelModule = angular.module('ualDataSourceLabel', [])

.component('ualDataSourceLabel', ualDataSourceLabelComponent);

export default ualDataSourceLabelModule;
