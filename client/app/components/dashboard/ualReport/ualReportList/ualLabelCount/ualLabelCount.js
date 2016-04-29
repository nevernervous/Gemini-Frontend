import angular from 'angular';
import ualLabelCountComponent from './ualLabelCount.component';

let ualLabelCountModule = angular.module('ualLabelCount', [])

.component('ualLabelCount', ualLabelCountComponent);

export default ualLabelCountModule;
