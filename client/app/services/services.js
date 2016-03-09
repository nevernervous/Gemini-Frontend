import angular from 'angular';
import servicesTransform from './services.transform';
import Session from './session/session';
import User from './user/user';
import Configuration from './configuration/configuration';
import Datasource from './datasource/datasource';

let sessionModule = angular.module('app.services', [
  Session.name,
  User.name,
  Configuration.name,
  Datasource.name
])

.factory('ServicesTransform', servicesTransform);

export default sessionModule;
