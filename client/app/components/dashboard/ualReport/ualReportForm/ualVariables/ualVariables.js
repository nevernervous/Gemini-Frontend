import angular from 'angular';
import ualVariablesFactory from './ualVariables.factory';
import ualVariablesCancelModal from './ualVariablesCancelModal/ualVariablesCancelModal';
import ualVariablesDeteleAllModal from './ualVariablesDeteleAllModal/ualVariablesDeteleAllModal';
import ualVariableSelectedItem from './ualVariableSelectedItem/ualVariableSelectedItem';
import ualVariablesGroup from './ualVariablesGroup/ualVariablesGroup';
import ualTooltipService from '../../../../../common/ualTooltip/ualTooltip.service';

let ualVariablesModule = angular.module('ualVariables', [
  ualVariablesCancelModal.name,
  ualVariablesDeteleAllModal.name,
  ualVariableSelectedItem.name,
  ualVariablesGroup.name
])

.factory('ualVariables', ualVariablesFactory)
.factory('ualTooltipService',ualTooltipService);

export default ualVariablesModule;

