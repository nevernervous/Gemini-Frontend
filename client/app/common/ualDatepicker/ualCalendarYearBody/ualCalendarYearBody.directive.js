import controller from './ualCalendarYearBody.controller';

class ualCalendarYearBodyDirective {
  /*@ngInject*/
  constructor() {
    this.require = ['^^ualCalendar', '^^ualCalendarYear', 'ualCalendarYearBody'];
    this.scope = { offset: '=mdYearOffset' };
    this.controller = controller;
    this.controllerAs = 'mdYearBodyCtrl';
    this.bindToController = true;
  }

  link(scope, element, attrs, controllers) {
    var calendarCtrl = controllers[0];
    var yearCtrl = controllers[1];
    var yearBodyCtrl = controllers[2];

    yearBodyCtrl.calendarCtrl = calendarCtrl;
    yearBodyCtrl.yearCtrl = yearCtrl;
    yearBodyCtrl.generateContent();

    scope.$watch(
      function() { return yearBodyCtrl.offset; },
      function(offset, oldOffset) {
        if (offset != oldOffset) {
          yearBodyCtrl.generateContent();
        }
      }
    );
  }
}

export default ualCalendarYearBodyDirective;
