import angular from 'angular';
import ualVariablesFactory from './ualVariables.factory';
import ualVariablesCancelModal from './ualVariablesCancelModal/ualVariablesCancelModal';
import ualVariablesDeteleAllModal from './ualVariablesDeteleAllModal/ualVariablesDeteleAllModal';
import ualVariableSelectedItem from './ualVariableSelectedItem/ualVariableSelectedItem';
import ualTabs from './ualTabs/ualTabs';
import ualTab from './ualTab/ualTab';
import ualVariablesGroup from './ualVariablesGroup/ualVariablesGroup';

let ualVariablesModule = angular.module('ualVariables', [
  ualVariablesCancelModal.name,
  ualVariablesDeteleAllModal.name,
  ualVariableSelectedItem.name,
  ualTabs.name,
  ualTab.name,
  ualVariablesGroup.name
])

.factory('ualVariables', ualVariablesFactory);

export default ualVariablesModule;
