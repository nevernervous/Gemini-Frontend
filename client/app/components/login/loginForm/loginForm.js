import angular from 'angular';
import loginFormComponent from './loginForm.component';
import LoginFormInput from './loginFormInput/loginFormInput';
import LoginFormSubmit from './loginFormSubmit/loginFormSubmit';

let loginFormModule = angular.module('loginForm', [
  LoginFormInput.name,
  LoginFormSubmit.name
])

.component('loginForm', loginFormComponent);

export default loginFormModule;
