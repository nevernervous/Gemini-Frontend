import controller from './ualCalendarYear.controller';
import template from './ualCalendarYear.html';

class ualCalendarYearDirective {
  /*@ngInject*/
  constructor() {
    this.template = template;
    this.require = ['^^ualCalendar', 'ualCalendarYear'];
    this.controller = controller;
    this.controllerAs = 'yearCtrl';
    this.bindToController = true;
  }

  link(scope, element, attrs, controllers) {
    var calendarCtrl = controllers[0];
    var yearCtrl = controllers[1];
    yearCtrl.initialize(calendarCtrl);
  }
}

export default ualCalendarYearDirective;
