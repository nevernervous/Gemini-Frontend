import angular from 'angular';
import ualHubFactory from './ualHub.factory';

let ualHubModule = angular.module('ualHub', [])
.factory('ualHub', ualHubFactory);

export default ualHubModule;
