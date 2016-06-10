import angular from 'angular';
import validatorService from './validator.service';

let validatorModule = angular.module('user', [])

.factory('Validator', validatorService);

export default validatorModule;
