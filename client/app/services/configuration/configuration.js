import angular from 'angular';
import configurationService from './configuration.service';

let configurationModule = angular.module('configuration', [])

.provider('Configuration', configurationService);

export default configurationModule;
