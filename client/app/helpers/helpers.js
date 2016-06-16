import angular from 'angular';
import PromisesSerializer from './promisesSerializer/promisesSerializer';

let helpersModule = angular.module('app.helpers', [
  PromisesSerializer.name
]);

export default helpersModule;
