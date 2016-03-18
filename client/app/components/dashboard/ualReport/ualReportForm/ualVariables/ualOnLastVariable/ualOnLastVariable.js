import angular from 'angular';
import ualOnLastVariableDirective from './ualOnLastVariable.directive';

let ualOnLastVariableModule = angular.module('ualOnLastVariable', [])

.directive('ualOnLastVariable', () => new ualOnLastVariableDirective());

export default ualOnLastVariableModule;
