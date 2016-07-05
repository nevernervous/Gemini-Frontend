import angular from 'angular';

import ualDatepickerInput from './ualDatepickerInput/ualDatepickerInput';
import ualCalendarMonthBody from './ualCalendarMonthBody/ualCalendarMonthBody';
import ualCalendarMonth from './ualCalendarMonth/ualCalendarMonth';
import ualCalendar from './ualCalendar/ualCalendar';

let ualDatepickerModule = angular.module('ualDatepicker', [
  ualDatepickerInput.name,
  ualCalendarMonthBody.name,
  ualCalendarMonth.name,
  ualCalendar.name
]);

export default ualDatepickerModule;
