import angular from 'angular';
import validatorService from './validator.service';
import xRegExp from 'xregexp';

let validatorModule = angular.module('validator', [
])
.factory("xRegExp", function(){
  return xRegExp;
})
.factory('Validator', validatorService);

export default validatorModule;
