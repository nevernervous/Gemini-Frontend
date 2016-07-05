import angular from 'angular';

import ualCalendarMonthBody from './ualCalendarMonthBody/ualCalendarMonthBody';
import ualCalendarMonth from './ualCalendarMonth/ualCalendarMonth';
import ualCalendar from './ualCalendar/ualCalendar';
import ualCalendarYear from './ualCalendarYear/ualCalendarYear';
import ualCalendarYearBody from './ualCalendarYearBody/ualCalendarYearBody';

import ualDate from './ualDate/ualDate';

import ualDatepickerDirective from './ualDatepicker.directive';

let ualDatepickerModule = angular.module('ualDatepicker', [
  ualCalendarMonthBody.name,
  ualCalendarMonth.name,
  ualCalendar.name,
  ualCalendarYear.name,
  ualCalendarYearBody.name,

  ualDate.name
])

.directive('ualDatepicker', () => new ualDatepickerDirective());

export default ualDatepickerModule;
