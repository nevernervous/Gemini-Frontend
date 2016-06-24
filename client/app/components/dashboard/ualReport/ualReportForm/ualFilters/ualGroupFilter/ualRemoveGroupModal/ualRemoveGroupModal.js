import angular from 'angular';
import ualRemoveGroupModalFactory from './ualRemoveGroupModal.factory';

let ualRemoveGroupModalModule = angular.module('ualRemoveGroupModal', [
])

.factory('ualRemoveGroupModal', ualRemoveGroupModalFactory);

export default ualRemoveGroupModalModule;
