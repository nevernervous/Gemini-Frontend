import controller from './ualCalendarMonth.controller';
import template from './ualCalendarMonth.html';

class ualCalendarMonthDirective {
  /*@ngInject*/
  constructor() {
    this.template = template;
    this.require = ['^^ualCalendar', 'ualCalendarMonth'];
    this.controller = controller;
    this.controllerAs = 'monthCtrl';
    this.bindToController = true;
  }

  link(scope, element, attrs, controllers) {
    var calendarCtrl = controllers[0];
    var monthCtrl = controllers[1];
    monthCtrl.initialize(calendarCtrl);
  }
}

export default ualCalendarMonthDirective;
