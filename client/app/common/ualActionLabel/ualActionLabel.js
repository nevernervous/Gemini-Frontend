import angular from 'angular';
import ualActionLabelDirective from './ualActionLabel.directive';

let ualActionLabelModule = angular.module('ualActionLabel', [])

.directive('ualActionLabel', () => new ualActionLabelDirective());

export default ualActionLabelModule;
