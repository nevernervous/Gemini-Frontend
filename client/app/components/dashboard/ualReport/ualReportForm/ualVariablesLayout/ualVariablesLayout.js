import angular from 'angular';
import ualVariablesLayoutComponent from './ualVariablesLayout.component';
import ualVariableSelectedItem from './ualVariableSelectedItem/ualVariableSelectedItem';
import ualVariablesMultiSelect from './ualVariablesMultiSelect/ualVariablesMultiSelect';
import ualTooltipService from '../../../../../common/ualTooltip/ualTooltip.service';

let ualVariablesLayoutModule = angular.module('ualVariablesLayout', [
  ualVariableSelectedItem.name,
  ualVariablesMultiSelect.name
])

.component('ualVariablesLayout', ualVariablesLayoutComponent)
.factory('ualTooltipService',ualTooltipService);

export default ualVariablesLayoutModule;
