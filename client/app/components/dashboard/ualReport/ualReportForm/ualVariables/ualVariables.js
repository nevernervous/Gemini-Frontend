import angular from 'angular';
import ualVariablesComponent from './ualVariables.component';
import ualTabContainer from './ualTabContainer/ualTabContainer';

let ualVariablesModule = angular.module('ualVariables', [
    ualTabContainer.name
])

.component('ualVariables', ualVariablesComponent);

export default ualVariablesModule;
