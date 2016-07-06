const UAL_DATE = new Date();
const UAL_DATE_MIN = UAL_DATE.getFullYear() - 20;
const UAL_DATE_MAX = UAL_DATE.getFullYear() + 20;

class ualDateController {
  /*@ngInject*/
  constructor($element, $scope, $$mdDateUtil) {
    this.name = 'ualDate';
    this.$element = $element;
    this.$scope = $scope;

    /** @final */
    this.dateUtil = $$mdDateUtil;

    this.dom = {
      month: null,
      day: null,
      year: null
    }

    // console.log(m().format('dddd'));

    let _month = null;
    let _day = null;
    let _year = null;

    $scope.$watch('vm.ngModel',  () => {
      if ($scope.vm.ngModel ) {
        const month = $scope.vm.ngModel.getMonth() + 1;
        const day = $scope.vm.ngModel.getDate();
        const year = $scope.vm.ngModel.getFullYear();

        _month = month > 9 ? month : `0${month}`;
        _day = day > 9 ? day : `0${day}`;
        _year = year;
      }
    });

    const format = () => {
      const month = parseInt(_month) || (UAL_DATE.getMonth() + 1);
      const day = parseInt(_day) || UAL_DATE.getDate();
      const year = parseInt(_year) || UAL_DATE.getFullYear();

      _month = month;
      _day = day;
      _year = year;

      let date = m(`${month}-${day}-${year}`, "MM-DD-YYYY");
      date =  date.isValid() ? date.toDate() : null;

      const value = date ?  this.dateUtil.createDateAtMidnight(date) : null;

      $scope.vm.ngModel = value;
      this.$scope.$emit('md-calendar-change', value);
    }

    this.date = {
      month: (newMonth, arrow) => {
        // Note that newHour can be undefined for two reasons:
        // 1. Because it is called as a getter and thus called with no arguments
        // 2. Because the property should actually be set to undefined. This happens e.g. if the
        //    input is invalid

        // TODO: PASTE
        // if ( arguments.length && /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(newHour) ) {
        //   const time = newHour.split(':');
        //   newHour = parseInt(time[0]);
        //   this.time.minute(time[1]);
        // }

        if ( arguments.length && /^[0-9]+$/.test(newMonth) ) {
          newMonth = parseInt(newMonth);

          if ( newMonth == 13 ) {
            newMonth = 1;
          }
          if ( newMonth == 0 ) {
            newMonth = 12;
          }

          if ( /^(0?[1-9]|1[012])$/.test(newMonth) ) {
            _month = newMonth > 9 ? newMonth : `0${newMonth}`;
            format();

            if ( newMonth > 1 && !arrow ) {
              this.dom.day.focus();
            }
          }
        }

        return _month;
      },
      day: (newDay, arrow) => {
        // Note that newHour can be undefined for two reasons:
        // 1. Because it is called as a getter and thus called with no arguments
        // 2. Because the property should actually be set to undefined. This happens e.g. if the
        //    input is invalid

        // TODO: PASTE
        // if ( arguments.length && /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(newDay) ) {
        //   const time = newHour.split(':');
        //   newDay = parseInt(time[1]);
        //   this.time.hour(time[0]);
        // }

        if ( arguments.length && /^[0-9]+$/.test(newDay) ) {
          newDay = parseInt(newDay);

          if ( newDay == 32 ) {
            newDay = 1;
          }
          if ( newDay == 0 ) {
            newDay = 31;
          }

          if ( /^(0?[1-9]|[12]\d|3[01])$/.test(newDay) ) {
            _day = newDay > 9 ? newDay : `0${newDay}`;
            format();

            if ( newDay > 3 && !arrow ) {
              this.dom.year.focus();
            }
          }
        }


        return _day;
      },
      year: (newYear, arrow) => {
        // Note that newHour can be undefined for two reasons:
        // 1. Because it is called as a getter and thus called with no arguments
        // 2. Because the property should actually be set to undefined. This happens e.g. if the
        //    input is invalid

        // TODO: PASTE
        // if ( arguments.length && /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(newYear) ) {
        //   const time = newHour.split(':');
        //   newYear = parseInt(time[1]);
        //   this.time.hour(time[0]);
        // }

        // if ( arguments.length && /^([1-9]|[1-9][0-9][0-9][0-9])$/.test(newYear) ) {
        //   newYear = newYear < 0 ? 59 : parseInt(newYear) % 60;
        //   _year = newYear > 9 ? newYear : `0${newYear}`;
        // }

        if ( arguments.length && /^[0-9]+$/.test(newYear) ) {
          newYear = parseInt(newYear);

          if ( !(arrow && ((newYear > UAL_DATE_MAX) || (newYear < UAL_DATE_MIN)) ) ) {
            _year = newYear;
            format();
          }
        }

        return _year;
      }
    };

    this.actions = {}

    this.actions.month = {
      '38': (e) => { // UP
        e.preventDefault();
        const value = parseInt(_month || 0) + 1;
        this.date.month(value, true);
      },
      '40': (e) => { // DOWN
        e.preventDefault();
        const value = parseInt(_month || 13) - 1;
        this.date.month(value < 1 ? 12 : value, true);
      },
      '37': (e) => { // LEFT
        e.preventDefault();
      },
      '39': (e) => { // RIGHT
        e.preventDefault();
        this.dom.day.focus();
      }
    }

    this.actions.day = {
      '38': (e) => { // UP
        e.preventDefault();
        const value = parseInt(_day || 0) + 1;
        this.date.day(value, true);
      },
      '40': (e) => { // DOWN
        e.preventDefault();
        const value = parseInt(_day || 32) - 1;
        this.date.day(value < 1 ? 31 : value, true);
      },
      '37': (e) => { // LEFT
        e.preventDefault();
        this.dom.month.focus();
      },
      '39': (e) => { // RIGHT
        e.preventDefault();
        this.dom.year.focus();
      }
    }

    this.actions.year = {
      '38': (e) => { // UP
        e.preventDefault();
        const value = parseInt(_year || (UAL_DATE.getFullYear() - 1)) + 1;
        this.date.year(value, true);
      },
      '40': (e) => { // DOWN
        e.preventDefault();
        const value = parseInt(_year || (UAL_DATE.getFullYear() + 1)) - 1;
        this.date.year(value, true);
      },
      '37': (e) => { // LEFT
        e.preventDefault();
        this.dom.day.focus();
      },
      '39': (e) => { // RIGHT
        e.preventDefault();
      }
    }
  }

  monthdown(event) {
    const action = this.actions.month[event.which];
    action ?
      this.$scope.$apply(() => action(event)):
      _.noop();
  }

  daydown(event) {
    const action = this.actions.day[event.which];
    action ?
      this.$scope.$apply(() => action(event)):
      _.noop();
  }

  yeardown(e) {
    const action = this.actions.year[event.which];
    action ?
      this.$scope.$apply(() => action(event)):
      _.noop();
  }

  $postLink() {
    this.dom.month = $(this.$element).find('.month');
    this.dom.day   = $(this.$element).find('.day');
    this.dom.year  = $(this.$element).find('.year');

    // ACTIONS
    this.dom.month.on('keydown', event => this.monthdown(event) );
    this.dom.month.on("click", function () { $(this).select(); });
    this.dom.month.on("focus", function () { $(this).select(); });

    this.dom.day.on('keydown', event => this.daydown(event) );
    this.dom.day.on("click", function () { $(this).select(); });
    this.dom.day.on("focus", function () { $(this).select(); });

    this.dom.year.on('keydown', event => this.yeardown(event) );
    this.dom.year.on("click", function () { $(this).select(); });
    this.dom.year.on("focus", function () { $(this).select(); });
  }

}

export default ualDateController;
