import angular from 'angular';
import ualButtonComponent from './ualButton.component';

let ualButtonModule = angular.module('ualButton', [])

.component('ualButton', ualButtonComponent);

export default ualButtonModule;
