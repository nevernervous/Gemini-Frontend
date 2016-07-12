import angular from 'angular';
import ualVariablesComponent from './ualVariables.component';
import ualVariableSelectedItem from './ualVariableSelectedItem/ualVariableSelectedItem';
import ualVariablesMultiSelect from './ualVariablesMultiSelect/ualVariablesMultiSelect';

let ualVariablesModule = angular.module('ualVariables', [
  ualVariableSelectedItem.name,
  ualVariablesMultiSelect.name
])

.component('ualVariables', ualVariablesComponent)

export default ualVariablesModule;
