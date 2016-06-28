import angular from 'angular';
import operatorService from './operator.service';
import operatorTransform from './operator.transform';

let operatorModule = angular.module('operator', [])

.factory('Operator', operatorService)
.factory('OperatorTransform', operatorTransform);

export default operatorModule;
