import angular from 'angular';
import aggregatorService from './aggregator.service';
import aggregatorTransform from './aggregators.transform';

let aggregatorModule = angular.module('aggregator', [])

.factory('Aggregator', aggregatorService)
.factory('AggregatorTransform', aggregatorTransform);

export default aggregatorModule;
