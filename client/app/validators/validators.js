import angular from 'angular';
import ualDateValidator from './ualDateValidator/ualDateValidator';

let validatorsModule = angular.module('app.validators', [
  ualDateValidator.name
]);

export default validatorsModule;
