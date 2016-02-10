import angular from 'angular';
import Login from './login/login';
import Dashboard from './dashboard/dashboard';
import Modals from './modals/modals';

let componentModule = angular.module('app.components', [
  Login.name,
  Dashboard.name,
  Modals.name
]);

export default componentModule;
