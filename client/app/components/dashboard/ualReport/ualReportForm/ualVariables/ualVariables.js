import angular from 'angular';
import ualVariablesFactory from './ualVariables.factory';

let ualVariablesModule = angular.module('ualVariables', [
])

.factory('ualVariables', ualVariablesFactory);

export default ualVariablesModule;
