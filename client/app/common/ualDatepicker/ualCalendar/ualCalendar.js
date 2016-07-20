import angular from 'angular';
import ualCalendarDirective from './ualCalendar.directive';

let ualCalendarModule = angular.module('ualCalendar', [])

.directive('ualCalendar', () => new ualCalendarDirective());

export default ualCalendarModule;
