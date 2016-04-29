import angular from 'angular';
import datasourceService from './datasource.service';

let datasourceModule = angular.module('datasource', [])

.factory('DataSource', datasourceService);

export default datasourceModule;
