import angular from 'angular';
import navOptionsComponent from './navOptions.component';

let navOptionsModule = angular.module('navOptions', [])

.component('navOptions', navOptionsComponent);

export default navOptionsModule;
