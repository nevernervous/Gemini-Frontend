import angular from 'angular';
import ualVariablesGroupService from './ualVariablesGroup.service';
import ualVariablesGroupComponent from './ualVariablesGroup.component';

let ualVariablesGroupModule = angular.module('ualVariablesGroup', [])

.factory('ualVariablesGroup', ualVariablesGroupService)
.component('ualVariablesGroup', ualVariablesGroupComponent);

export default ualVariablesGroupModule;
