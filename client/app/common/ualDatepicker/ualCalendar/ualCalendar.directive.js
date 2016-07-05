import controller from './ualCalendar.controller';
import template from './ualCalendar.html';

class ualCalendarDirective {
  /*@ngInject*/
  constructor() {
    this.template = template;
    this.scope = {
      minDate: '=mdMinDate',
      maxDate: '=mdMaxDate',
      dateFilter: '=mdDateFilter'
    };
    this.require = ['ngModel', 'ualCalendar'];
    this.controller = controller;
    this.controllerAs = 'calendarCtrl';
    this.bindToController = true;
  }

  link(scope, element, attrs, controllers) {
    var ngModelCtrl = controllers[0];
    var mdCalendarCtrl = controllers[1];
    mdCalendarCtrl.configureNgModel(ngModelCtrl);
  }
}

export default ualCalendarDirective;
