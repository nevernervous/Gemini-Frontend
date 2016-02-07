import angular from 'angular';
import Navbar from './navbar/navbar';
import Sidebar from './sidebar/sidebar';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Sidebar.name
]);

export default commonModule;
