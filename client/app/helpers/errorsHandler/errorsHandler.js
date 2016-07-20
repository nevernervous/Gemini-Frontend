import angular from 'angular';
import errorsHandlerHelper from './errorsHandler.service';

let errorsHandlerModule = angular.module('app.helper.errorsHandler', [
])

.factory('errorsHandler', errorsHandlerHelper)
.constant("errorMessages", {
  500: { type: 'error', text: 'Unexpected error. Please try again.'},
  400: { type: 'error', text: 'Unexpected error. Please try again.'}
});

export default errorsHandlerModule;
