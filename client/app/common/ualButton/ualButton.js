import angular from 'angular';
//import ualButtonComponent from './ualButton.component';
import ualButtonDirective from './ualButton.directive';

let ualButtonModule = angular.module('ualButton', [])

.directive('ualButton', () => new ualButtonDirective());
//.component('ualButton', ualButtonComponent);

export default ualButtonModule;
