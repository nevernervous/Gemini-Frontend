import angular from 'angular';
import SessionFactory from './session.service';

let sessionModule = angular.module('session', [])

.factory('Session', SessionFactory);

export default sessionModule;
