import angular from 'angular';
import Session from './session/session';

let sessionModule = angular.module('app.services', [
  Session.name
]);

export default sessionModule;
