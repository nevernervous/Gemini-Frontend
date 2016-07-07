import angular from 'angular';
import ualDateValidator from './ualDateValidator/ualDateValidator';
import ualMultipleValues from './ualMultipleValues/ualMultipleValues';
import ualPattern from './ualPattern/ualPattern';
let validatorsModule = angular.module('app.validators', [
  ualDateValidator.name,
  ualMultipleValues.name,
  ualPattern.name
]);

export default validatorsModule;
