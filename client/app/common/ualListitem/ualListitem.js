import angular from 'angular';
import ualListitemDirective from './ualListitem.directive';

let ualListitemModule = angular.module('ualListitem', [])

.directive('ualListitem', () => new ualListitemDirective());

export default ualListitemModule;
