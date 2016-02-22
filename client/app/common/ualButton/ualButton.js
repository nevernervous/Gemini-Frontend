import angular from 'angular';
import ualButtonDirective from './ualButton.directive';

let ualButtonModule = angular.module('ualButton', [])

.directive('ualButton', () => new ualButtonDirective());
//.component('ualButton', ualButtonComponent);

export default ualButtonModule;
