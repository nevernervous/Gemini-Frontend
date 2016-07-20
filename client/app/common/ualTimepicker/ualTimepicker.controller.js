
// TODO: COPY feature
// TODO: ngModel support
class UalTimepickerController {
  /*@ngInject*/
  constructor($element, $scope, $timeout) {
    this.name = 'ualTimepicker';
    this.$element = $element;
    this.$scope = $scope;
    this.$timeout = $timeout;

    this.dom = {
      hours: null,
      minutes: null,
      clock: null
    }

    let _hour = null;
    let _minute = null;
    this.time = {
      hour: (newHour, arrow) => {
        // Note that newHour can be undefined for two reasons:
        // 1. Because it is called as a getter and thus called with no arguments
        // 2. Because the property should actually be set to undefined. This happens e.g. if the
        //    input is invalid

        // For PASTE purpose
        if ( arguments.length && /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(newHour) ) {
          const time = newHour.split(':');
          newHour = parseInt(time[0]);
          this.time.minute(time[1]);
        }

        if ( arguments.length && /^[0-9]+$/.test(newHour) ) {
          newHour = newHour < 0 ? 23 : parseInt(newHour) % 24;
          _hour = newHour > 9 ? newHour : `0${newHour}`;

          if ( newHour > 2 && !arrow ) {
            this.dom.minutes.focus();
          }
        }

        return _hour;
      },
      minute: (newMinute, arrow) => {
        // Note that newHour can be undefined for two reasons:
        // 1. Because it is called as a getter and thus called with no arguments
        // 2. Because the property should actually be set to undefined. This happens e.g. if the
        //    input is invalid

        // For PASTE purpose
        if ( arguments.length && /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(newMinute) ) {
          const time = newHour.split(':');
          newMinute = parseInt(time[1]);
          this.time.hour(time[0]);
        }

        if ( arguments.length && /^[0-9]+$/.test(newMinute) ) {
          newMinute = newMinute < 0 ? 59 : parseInt(newMinute) % 60;
          _minute = newMinute > 9 ? newMinute : `0${newMinute}`;

          if ( newMinute > 5 && !arrow ) {
            this.dom.clock.focus();
          }
        }
        return _minute;
      }
    };

    this.actions = {}

    this.actions.hours = {
      '38': (e) => { // UP
        e.preventDefault();
        const value = parseInt(_hour || 0) + 1;
        this.time.hour(value, true);
      },
      '40': (e) => { // DOWN
        e.preventDefault();
        const value = parseInt(_hour || 0) - 1;
        this.time.hour(value < 0 ? 23 : value, true);
      },
      '37': (e) => { // LEFT
        e.preventDefault();
      },
      '39': (e) => { // RIGHT
        e.preventDefault();
        this.dom.minutes.focus();
      }
    }

    this.actions.minutes = {
      '38': (e) => { // UP
        e.preventDefault();
        const value = parseInt(_minute || 0) + 1;
        this.time.minute(value, true);
      },
      '40': (e) => { // DOWN
        e.preventDefault();
        const value = parseInt(_minute || 0) - 1;
        this.time.minute(value < 0 ? 59 : value, true);
      },
      '37': (e) => { // LEFT
        e.preventDefault();
        this.dom.hours.focus();
      },
      '39': (e) => { // RIGHT
        e.preventDefault();
        this.dom.clock.focus();
      }
    }

    this.actions.clock = {
      '37': (e) => {
        e.preventDefault();
        this.dom.minutes.focus();
      }
    }
  }

  hoursdown(event) {
    const action = this.actions.hours[event.which];
    action ?
      this.$scope.$apply(() => action(event)):
      _.noop();
  }

  minutesdown(event) {
    const action = this.actions.minutes[event.which];
    action ?
      this.$scope.$apply(() => action(event)):
      _.noop();
  }

  clockdown(e) {
    const action = this.actions.clock[e.which];
    action ? action(e) : _.noop();
  }

  $postLink() {
    this.dom.hours   = $(this.$element).find('.hours');
    this.dom.minutes = $(this.$element).find('.minutes');
    this.dom.clock   = $(this.$element).find('.clock');

    // ACTIONS
    this.dom.hours.on('keydown', event => this.hoursdown(event) );
    this.dom.hours.on("click", function () { $(this).select(); });
    this.dom.hours.on("focus", function () { $(this).select(); });

    this.dom.minutes.on('keydown', event => this.minutesdown(event) );
    this.dom.minutes.on("click", function () { $(this).select(); });
    this.dom.minutes.on("focus", function () { $(this).select(); });

    this.dom.clock.on('keydown', event => this.clockdown(event) );
  }
}

export default UalTimepickerController;
