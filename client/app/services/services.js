import angular from 'angular';
import Session from './session/session';
import User from './user/user';
import Configuration from './configuration/configuration';

let sessionModule = angular.module('app.services', [
  Session.name,
  User.name, 
  Configuration.name
]);

export default sessionModule;
