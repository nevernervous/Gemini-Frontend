import angular from 'angular';
import mainMenuServiceService from './mainMenuService.service';

let mainMenuServiceModule = angular.module('mainMenuService', [])

.factory('mainMenuService', mainMenuServiceService);

export default mainMenuServiceModule;
