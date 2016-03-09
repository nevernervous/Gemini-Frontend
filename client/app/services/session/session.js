import angular from 'angular';
import uuid from 'angular-uuid';
import ngStorage from 'ngstorage';
import SessionService from './session.service';
import TokenService from './token.service';
import SessionInterceptor from './session.interceptor';

let sessionModule = angular.module('session', [
  'angular-uuid',
  ngStorage.name
])

.config(['$httpProvider', function($httpProvider) {  
  $httpProvider.interceptors.push(SessionInterceptor);
}])

.factory('Token', TokenService)
.factory('Session', SessionService);

export default sessionModule;
