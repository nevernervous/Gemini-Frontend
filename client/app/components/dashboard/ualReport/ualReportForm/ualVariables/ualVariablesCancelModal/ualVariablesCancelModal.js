import angular from 'angular';
import ualVariablesCancelModalFactory from './ualVariablesCancelModal.factory';

let ualVariablesCancelModalModule = angular.module('ualVariablesCancelModal', [
])

.factory('ualVariablesCancelModal', ualVariablesCancelModalFactory);

export default ualVariablesCancelModalModule;
