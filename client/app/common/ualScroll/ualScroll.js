import angular from 'angular';
import ualScrollComponent from './ualScroll.directive';

let ualScrollModule = angular.module('ualScroll', [])

.directive('ualScroll', () => new ualScrollComponent());

export default ualScrollModule;
