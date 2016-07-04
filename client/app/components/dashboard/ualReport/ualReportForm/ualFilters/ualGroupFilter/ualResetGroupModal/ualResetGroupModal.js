import angular from 'angular';
import ualResetGroupModalFactory from './ualResetGroupModal.factory';

let ualResetGroupModalModule = angular.module('ualResetGroupModal', [
])

.factory('ualResetGroupModal', ualResetGroupModalFactory);

export default ualResetGroupModalModule;
