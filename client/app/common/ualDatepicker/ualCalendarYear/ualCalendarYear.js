import angular from 'angular';
import ualCalendarYearDirective from './ualCalendarYear.directive';

let ualCalendarYearModule = angular.module('ualCalendarYear', [])

.directive('ualCalendarYear', () => new ualCalendarYearDirective());

export default ualCalendarYearModule;
