import angular from 'angular';
import aggregatorService from './aggregator.service';

let aggregatorModule = angular.module('aggregator', [])

.factory('Aggregator', aggregatorService);

export default aggregatorModule;
