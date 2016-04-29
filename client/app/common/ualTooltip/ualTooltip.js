import angular from 'angular';
import ualTooltipDirective from './ualTooltip.directive';

let ualTooltipModule = angular.module('ualTooltip', [])

.directive('ualTooltip', () => new ualTooltipDirective());

export default ualTooltipModule;
