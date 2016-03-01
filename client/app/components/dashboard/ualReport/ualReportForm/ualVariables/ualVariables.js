import angular from 'angular';
import ualVariablesFactory from './ualVariables.factory';
import ualVariableSelectedItem from './ualVariableSelectedItem/ualVariableSelectedItem';

let ualVariablesModule = angular.module('ualVariables', [
  ualVariableSelectedItem.name
])

.factory('ualVariables', ualVariablesFactory);

export default ualVariablesModule;
