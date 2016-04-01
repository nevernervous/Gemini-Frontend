import angular from 'angular';
import servicesTransform from './services.transform';
import aggregatorTransform from './aggregators.transform';
import Session from './session/session';
import User from './user/user';
import Configuration from './configuration/configuration';
import Datasource from './datasource/datasource';
import Aggregator from './aggregator/aggregator';
import Report from './report/report';

let sessionModule = angular.module('app.services', [
  Session.name,
  User.name,
  Configuration.name,
  Datasource.name,
  Aggregator.name,
  Report.name
])

.factory('ServicesTransform', servicesTransform)
.factory('AggregatorTransform', aggregatorTransform);

export default sessionModule;
