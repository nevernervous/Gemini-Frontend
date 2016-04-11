import angular from 'angular';
import ualRenderDirective from './ualRender.directive';

let ualRenderModule = angular.module('ualRender', [])

.directive('ualRender', () => new ualRenderDirective());

export default ualRenderModule;
