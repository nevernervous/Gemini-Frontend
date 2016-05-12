import angular from 'angular';
import ualVariablesFactory from './ualVariables.factory';
import ualVariablesCancelModal from './ualVariablesCancelModal/ualVariablesCancelModal';
import ualVariablesDeteleAllModal from './ualVariablesDeteleAllModal/ualVariablesDeteleAllModal';
import ualVariableSelectedItem from './ualVariableSelectedItem/ualVariableSelectedItem';
import ualVariablesGroup from './ualVariablesGroup/ualVariablesGroup';
import ualVariablesMultiSelect from './ualVariablesMultiSelect/ualVariablesMultiSelect';

let ualVariablesModule = angular.module('ualVariables', [
  ualVariablesCancelModal.name,
  ualVariablesDeteleAllModal.name,
  ualVariableSelectedItem.name,
  ualVariablesGroup.name,
  ualVariablesMultiSelect.name
])

.factory('ualVariables', ualVariablesFactory);

export default ualVariablesModule;

