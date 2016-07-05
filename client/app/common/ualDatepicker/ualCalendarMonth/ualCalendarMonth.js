import angular from 'angular';
import ualCalendarMonthDirective from './ualCalendarMonth.directive';

let ualCalendarMonthModule = angular.module('ualCalendarMonth', [])

.directive('ualCalendarMonth', () => new ualCalendarMonthDirective());

export default ualCalendarMonthModule;
