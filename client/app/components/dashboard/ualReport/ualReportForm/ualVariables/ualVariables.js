import angular from 'angular';
import ualVariablesComponent from './ualVariables.component';
import ualTabs from './ualTabs/ualTabs';
import ualTab from './ualTab/ualTab';

let ualVariablesModule = angular.module('ualVariables', [
ualTabs.name, 
ualTab.name
])

.component('ualVariables', ualVariablesComponent);

export default ualVariablesModule;
