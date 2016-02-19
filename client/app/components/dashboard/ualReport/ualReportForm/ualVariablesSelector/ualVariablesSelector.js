import angular from 'angular';
import ualVariablesSelectorComponent from './ualVariablesSelector.component';

let ualVariablesSelectorModule = angular.module('ualVariablesSelector', [])

.component('ualVariablesSelector', ualVariablesSelectorComponent);

export default ualVariablesSelectorModule;
