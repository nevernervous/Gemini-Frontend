import angular from 'angular';
import logoutModalFactory from './logoutModal.factory';

let logoutModalModule = angular.module('logoutModal', [
])

.factory('logoutModal', logoutModalFactory);

export default logoutModalModule;
