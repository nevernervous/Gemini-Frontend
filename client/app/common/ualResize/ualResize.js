import angular from 'angular';
import ualResizeDirective from './ualResize.directive';

let ualResizeModule = angular.module('ualResize', [
    
])

.directive('ualResize', () => new ualResizeDirective());

export default ualResizeModule;
