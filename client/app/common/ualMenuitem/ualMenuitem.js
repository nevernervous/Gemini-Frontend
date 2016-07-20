import angular from 'angular';
import ualMenuitemDirective from './ualMenuitem.directive';

let ualMenuitemModule = angular.module('ualMenuitem', [])

.directive('ualMenuitem', () => new ualMenuitemDirective());

export default ualMenuitemModule;
