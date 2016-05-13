import angular from 'angular';
import ualVariablesLayoutComponent from './ualVariablesLayout.component';
import ualVariablesMultiSelect from './ualVariablesMultiSelect/ualVariablesMultiSelect';
import ualTooltipService from '../../../../../common/ualTooltip/ualTooltip.service';

let ualVariablesLayoutModule = angular.module('ualVariablesLayout', [
  ualVariablesMultiSelect.name
])

.component('ualVariablesLayout', ualVariablesLayoutComponent)
.factory('ualTooltipService',ualTooltipService);

export default ualVariablesLayoutModule;
