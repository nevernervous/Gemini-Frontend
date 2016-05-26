import angular from 'angular';
import ualVariableSelectedItemComponent from './ualVariableSelectedItem.component';
import ualTooltipService from '../../../../../../common/ualTooltip/ualTooltip.service';

let ualVariableSelectedItemModule = angular.module('ualVariableSelectedItem', [])

.component('ualVariableSelectedItem', ualVariableSelectedItemComponent)
.factory('ualTooltipService',ualTooltipService);

export default ualVariableSelectedItemModule;
