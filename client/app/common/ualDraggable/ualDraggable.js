import angular from 'angular';
import ualDraggableDirective from './ualDraggable.directive';

let ualDraggableModule = angular.module('ualDraggable', [])

.directive('ualDraggable', () => new ualDraggableDirective());

export default ualDraggableModule;
