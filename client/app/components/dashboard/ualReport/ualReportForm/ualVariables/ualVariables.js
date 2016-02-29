import angular from 'angular';
import ualVariablesFactory from './ualVariables.factory';
import ualTabs from './ualTabs/ualTabs';
import ualTab from './ualTab/ualTab';
import ualVariablesGroup from './ualVariablesGroup/ualVariablesGroup';
import ualVariableItem from './ualVariableItem/ualVariableItem';

let ualVariablesModule = angular.module('ualVariables', [
ualTabs.name,
ualTab.name,
ualVariablesGroup.name,
ualVariableItem.name
])

.factory('ualVariables', ualVariablesFactory);

export default ualVariablesModule;
