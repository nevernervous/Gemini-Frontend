import angular from 'angular';
import ualSignalRService from './ualSignalR.service';
import ualHub from './ualHub/ualHub';

let ualSignalRModule = angular.module('ualSignalR', [
  ualHub.name
])
.factory('ualSignalR', ualSignalRService);

export default ualSignalRModule;
