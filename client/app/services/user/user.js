import angular from 'angular';
import userService from './user.service';

let userModule = angular.module('user', [])

.factory('User', userService);

export default userModule;
