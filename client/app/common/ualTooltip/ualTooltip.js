import angular from 'angular';
import ualTooltipDirective from './ualTooltip.directive';
import ualTooltipService from './ualTooltip.service';

let ualTooltipModule = angular.module('ualTooltip', [])

.directive('ualTooltip', () => new ualTooltipDirective())
.factory('ualTooltipService', ualTooltipService);

export default ualTooltipModule;
