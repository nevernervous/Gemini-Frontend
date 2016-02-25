import angular from 'angular';
import ualSearchVariablesComponent from './ualSearchVariables.component';

let ualSearchVariablesModule = angular.module('ualSearchVariables', [])

.component('ualSearchVariables', ualSearchVariablesComponent);

export default ualSearchVariablesModule;
