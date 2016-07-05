import angular from 'angular';
import ualDateValidatorDirective from './ualDateValidator.directive';

let ualDateValidatorModule = angular.module('ualDateValidator', [])

.directive('ualDateValidator', () => new ualDateValidatorDirective());

export default ualDateValidatorModule;
