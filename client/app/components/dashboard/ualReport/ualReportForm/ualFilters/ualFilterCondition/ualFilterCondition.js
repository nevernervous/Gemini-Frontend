import angular from 'angular';
import ualFilterConditionComponent from './ualFilterCondition.component';

let ualFilterConditionModule = angular.module('ualFilterCondition', [])

.component('ualFilterCondition', ualFilterConditionComponent);

export default ualFilterConditionModule;
