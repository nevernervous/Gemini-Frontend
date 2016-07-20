import angular from 'angular';
import ualLoadingComponent from './ualLoading.component';

let ualLoadingModule = angular.module('ualLoading', [])

.component('ualLoading', ualLoadingComponent);

export default ualLoadingModule;
