import angular from 'angular';
import loginHeaderComponent from './loginHeader.component';

let loginHeaderModule = angular.module('loginHeader', [
])

.component('loginHeader', loginHeaderComponent);

export default loginHeaderModule;
