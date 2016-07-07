import angular from 'angular';
import ualPatternDirective from './ualPattern.directive';

let ualPatternModule = angular.module('ualPattern', [])

.directive('ualPattern', () => new ualPatternDirective());

export default ualPatternModule;
