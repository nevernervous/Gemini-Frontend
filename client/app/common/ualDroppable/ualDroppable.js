import angular from 'angular';
import ualDroppableDirective from './ualDroppable.directive';

let ualDroppableModule = angular.module('ualDroppable', [])

.directive('ualDroppable', () => new ualDroppableDirective());

export default ualDroppableModule;
