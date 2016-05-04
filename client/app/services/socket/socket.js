import angular from 'angular';
import socketService from './socket.service';

let socketModule = angular.module('socket', [])

.factory('Socket', socketService);

export default socketModule;
