import angular from 'angular';
import Login from './login/login';
import Dashboard from './dashboard/dashboard';

import './components.scss';

let componentModule = angular.module('app.components', [
  Login.name,
  Dashboard.name
]);

export default componentModule;
