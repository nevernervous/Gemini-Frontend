import angular from 'angular';
import expirationModalFactory from './expirationModal.factory';

let expirationModalModule = angular.module('expirationModal', [
])

.factory('expirationModal', expirationModalFactory);

export default expirationModalModule;
