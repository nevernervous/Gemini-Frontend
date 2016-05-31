import angular from 'angular';
import errorsHandlerHelper from './errorsHandler.service';

let errorsHandlerModule = angular.module('app.helper.errorsHandler', [
])

.factory('errorsHandler', errorsHandlerHelper);

export default errorsHandlerModule;
