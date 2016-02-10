import angular from 'angular';
import Session from './session/session';
import User from './user/user';

let sessionModule = angular.module('app.services', [
  Session.name,
  User.name
]);

export default sessionModule;
