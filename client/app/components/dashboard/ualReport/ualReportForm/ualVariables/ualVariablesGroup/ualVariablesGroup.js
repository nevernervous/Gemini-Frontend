import angular from 'angular';
//import ualVariablesGroupService from './ualVariablesGroup.service';
import ualVariablesGroupComponent from './ualVariablesGroup.component';
import ualVariableItem from '../ualVariableItem/ualVariableItem'

let ualVariablesGroupModule = angular.module('ualVariablesGroup', [
    ualVariableItem.name
])

//.factory('ualVariablesGroup', ualVariablesGroupService)
.component('ualVariablesGroup', ualVariablesGroupComponent);

export default ualVariablesGroupModule;
