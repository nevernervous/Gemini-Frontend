import angular from 'angular';
import servicesTransform from './services.transform';
import Session from './session/session';
import User from './user/user';
import Configuration from './configuration/configuration';
import Datasource from './datasource/datasource';
import Aggregator from './aggregator/aggregator';
import Report from './report/report';
import Socket from './socket/socket';

let sessionModule = angular.module('app.services', [
  Session.name,
  User.name,
  Configuration.name,
  Datasource.name,
  Aggregator.name,
  Report.name,
  Socket.name
])

.factory('ServicesTransform', servicesTransform);

export default sessionModule;
