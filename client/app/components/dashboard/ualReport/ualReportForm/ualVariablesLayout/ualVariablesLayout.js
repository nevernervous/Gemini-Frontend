import angular from 'angular';
import ualVariablesLayoutComponent from './ualVariablesLayout.component';
import ualVariableSelectedItem from './ualVariableSelectedItem/ualVariableSelectedItem';
import ualVariablesMultiSelect from './ualVariablesMultiSelect/ualVariablesMultiSelect';
import ualVariablesDeteleAllModal from './ualVariablesDeteleAllModal/ualVariablesDeteleAllModal';

let ualVariablesLayoutModule = angular.module('ualVariablesLayout', [
  ualVariableSelectedItem.name,
  ualVariablesMultiSelect.name,
  ualVariablesDeteleAllModal.name
])

.component('ualVariablesLayout', ualVariablesLayoutComponent)

export default ualVariablesLayoutModule;
