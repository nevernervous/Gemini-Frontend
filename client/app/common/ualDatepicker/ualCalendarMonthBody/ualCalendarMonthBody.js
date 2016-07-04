import angular from 'angular';
import ualCalendarMonthBodyDirective from './ualCalendarMonthBody.directive';

let ualCalendarMonthBodyModule = angular.module('ualCalendarMonthBody', [])

.directive('ualCalendarMonthBody', () => new ualCalendarMonthBodyDirective());

export default ualCalendarMonthBodyModule;
