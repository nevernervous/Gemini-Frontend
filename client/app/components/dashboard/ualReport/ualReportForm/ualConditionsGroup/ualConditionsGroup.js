import angular from 'angular';
import ualConditionsGroupComponent from './ualConditionsGroup.component';

let ualConditionsGroupModule = angular.module('ualConditionsGroup', [])

.component('ualConditionsGroup', ualConditionsGroupComponent);

export default ualConditionsGroupModule;
