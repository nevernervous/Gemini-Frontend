import angular from 'angular';
import ualIconDirective from './ualIcon.directive';

let ualIconModule = angular.module('ualIcon', [])

.directive('ualIcon', () => new ualIconDirective());

export default ualIconModule;
