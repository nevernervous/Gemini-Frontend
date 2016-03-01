import angular from 'angular';
import ualVariablesFactory from './ualVariables.factory';
import ualVariablesDeteleAllModal from './ualVariablesDeteleAllModal/ualVariablesDeteleAllModal';
import ualVariableSelectedItem from './ualVariableSelectedItem/ualVariableSelectedItem';
import ualTabs from './ualTabs/ualTabs';
import ualTab from './ualTab/ualTab';
import ualVariablesGroup from './ualVariablesGroup/ualVariablesGroup';
import ualVariableItem from './ualVariableItem/ualVariableItem';

let ualVariablesModule = angular.module('ualVariables', [
ualVariablesDeteleAllModal.name,
ualVariableSelectedItem.name,
ualTabs.name,
ualTab.name,
ualVariablesGroup.name,
ualVariableItem.name
])

.factory('ualVariables', ualVariablesFactory);

export default ualVariablesModule;
