import angular from 'angular';
import promisesSerializerHelper from './promisesSerializer.service';

let promisesSerializerModule = angular.module('app.helper.promisesSerializer', [
])

.factory('PromisesSerializer', promisesSerializerHelper);

export default promisesSerializerModule;
