import angular from 'angular';
import ualTimerModalFactory from './ualTimerModal.factory';

let ualTimerModalModule = angular.module('ualTimerModal', [
])

.factory('ualTimerModal', ualTimerModalFactory);

export default ualTimerModalModule;
