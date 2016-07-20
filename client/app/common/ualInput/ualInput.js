import angular from 'angular';
import ualInputDirective from './ualInput.directive';

let ualInputModule = angular.module('ualInput', [])

.directive('ualInput', () => new ualInputDirective());

export default ualInputModule;
