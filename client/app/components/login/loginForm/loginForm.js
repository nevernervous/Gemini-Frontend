import angular from 'angular';
import loginFormComponent from './loginForm.component';

let loginFormModule = angular.module('loginForm', [])

.component('loginForm', loginFormComponent);

export default loginFormModule;
