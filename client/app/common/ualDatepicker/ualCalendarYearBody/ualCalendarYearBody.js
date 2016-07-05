import angular from 'angular';
import ualCalendarYearBodyDirective from './ualCalendarYearBody.directive';

let ualCalendarYearBodyModule = angular.module('ualCalendarYearBody', [])

.directive('ualCalendarYearBody', () => new ualCalendarYearBodyDirective());

export default ualCalendarYearBodyModule;
