import angular from 'angular';
import ualMultipleValuesDirective from './ualMultipleValues.directive';

let ualMultipleValuesModule = angular.module('ualMultipleValues', [])

.directive('ualMultipleValues', () => new ualMultipleValuesDirective());

export default ualMultipleValuesModule;
