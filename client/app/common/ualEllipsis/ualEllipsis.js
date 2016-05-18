import angular from 'angular';
import ualEllipsisDirective from './ualEllipsis.directive';

let ualEllipsisModule = angular.module('ualEllipsis', [])

.directive('ualEllipsis', () => new ualEllipsisDirective());

export default ualEllipsisModule;
