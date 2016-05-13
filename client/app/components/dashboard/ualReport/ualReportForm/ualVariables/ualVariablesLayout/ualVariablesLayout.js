import angular from 'angular';
import ualVariablesLayoutComponent from './ualVariablesLayout.component';
import ualTooltipService from '../../../../../../common/ualTooltip/ualTooltip.service';

let ualVariablesLayoutModule = angular.module('ualVariablesLayout', [])

.component('ualVariablesLayout', ualVariablesLayoutComponent)
.factory('ualTooltipService',ualTooltipService);

export default ualVariablesLayoutModule;
