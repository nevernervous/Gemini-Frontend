import angular from 'angular';
import datasourceService from './datasource.service';
import datasourceTransform from './datasource.transform';

let datasourceModule = angular.module('datasource', [])

.factory('DataSource', datasourceService)
.factory('DataSourceTransform', datasourceTransform);

export default datasourceModule;
