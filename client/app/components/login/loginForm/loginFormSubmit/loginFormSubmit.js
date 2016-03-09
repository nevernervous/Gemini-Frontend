import angular from 'angular';
import loginFormSubmitComponent from './loginFormSubmit.component';

let loginFormSubmitModule = angular.module('loginFormSubmit', [
])

.component('loginFormSubmit', loginFormSubmitComponent);

export default loginFormSubmitModule;
