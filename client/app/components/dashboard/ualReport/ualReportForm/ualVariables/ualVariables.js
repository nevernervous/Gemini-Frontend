import angular from 'angular';
import ualVariablesFactory from './ualVariables.factory';
import ualVariablesDeteleAllModal from './ualVariablesDeteleAllModal/ualVariablesDeteleAllModal';
import ualVariableSelectedItem from './ualVariableSelectedItem/ualVariableSelectedItem';

let ualVariablesModule = angular.module('ualVariables', [
  ualVariablesDeteleAllModal.name,
  ualVariableSelectedItem.name
])

.factory('ualVariables', ualVariablesFactory);

export default ualVariablesModule;
