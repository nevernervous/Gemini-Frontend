import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginComponent from './login.component';
import MessageBanner from './messageBanner/messageBanner';
import LoginHeader from './loginHeader/loginHeader';
import LoginForm from './loginForm/loginForm';

let loginModule = angular.module('login', [
  uiRouter,
  MessageBanner.name,
  LoginHeader.name,
  LoginForm.name
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('login', {
      url: '/login',
      template: '<login></login>'
    });
})

.component('login', loginComponent);

export default loginModule;
