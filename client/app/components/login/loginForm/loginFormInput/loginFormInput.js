import angular from 'angular';
import loginFormInputComponent from './loginFormInput.component';

let loginFormInputModule = angular.module('loginFormInput', [
])

.component('loginFormInput', loginFormInputComponent);

export default loginFormInputModule;
