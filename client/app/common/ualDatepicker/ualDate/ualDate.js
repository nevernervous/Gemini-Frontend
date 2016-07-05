import angular from 'angular';
import ualDateComponent from './ualDate.component';

let ualDateModule = angular.module('ualDate', [])

.component('ualDate', ualDateComponent);

export default ualDateModule;
