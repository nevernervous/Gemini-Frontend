import angular from 'angular';
import loginFormComponent from './loginForm.component';
import LoginFormInput from './loginFormInput/loginFormInput';

let loginFormModule = angular.module('loginForm', [
  LoginFormInput.name,
])

.component('loginForm', loginFormComponent);

export default loginFormModule;
