import angular from 'angular';
import PromisesSerializer from './promisesSerializer/promisesSerializer';
import Validator from './validator/validator';
import Formater from './formater/formater';

let helpersModule = angular.module('app.helpers', [
  PromisesSerializer.name
]);

export default helpersModule;
