import angular from 'angular';
import FormaterService from './formater.service';

let FormaterModule = angular.module('formater', [
])

.factory('Formater', FormaterService);

export default FormaterModule;
