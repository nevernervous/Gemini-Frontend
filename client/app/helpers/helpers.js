import angular from 'angular';
import PromisesSerializer from './promisesSerializer/promisesSerializer';
import ErrorsHandler from './errorsHandler/errorsHandler';

let helpersModule = angular.module('app.helpers', [
  PromisesSerializer.name,
  ErrorsHandler.name
]);

export default helpersModule;
