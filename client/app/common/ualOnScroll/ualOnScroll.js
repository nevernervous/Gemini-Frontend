import angular from 'angular';
import ualOnScrollComponent from './ualOnScroll.directive';

let ualOnScrollModule = angular.module('ualOnScroll', [])

.directive('ualOnScroll', () => new ualOnScrollComponent());

export default ualOnScrollModule;
