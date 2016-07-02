class UalTimepickerController {
  /*@ngInject*/
  constructor($element) {
    this.name = 'ualTimepicker';
    this.$element = $element;

    this.dom = {
      hours: null,
      minutes: null,
      clock: null
    }

    this.reset = true;

    let _hour = null;
    let _minute = null;
    this.time = {
      hour: (newHour) => {
        // Note that newHour can be undefined for two reasons:
        // 1. Because it is called as a getter and thus called with no arguments
        // 2. Because the property should actually be set to undefined. This happens e.g. if the
        //    input is invalid
        if ( arguments.length && /^[0-9]+$/.test(newHour) ) {
          newHour = newHour < 0 ? 23 : parseInt(newHour) % 24;
          newHour = newHour > 9 ? newHour : `0${newHour}`;

          return (_hour = newHour);
        }

        return _hour;
      },
      minute: (newMinute) => {
        // Note that newHour can be undefined for two reasons:
        // 1. Because it is called as a getter and thus called with no arguments
        // 2. Because the property should actually be set to undefined. This happens e.g. if the
        //    input is invalid
        if ( arguments.length && /^[0-9]+$/.test(newMinute) ) {
          newMinute = newMinute < 0 ? 59 : parseInt(newMinute) % 60;
          newMinute = newMinute > 9 ? newMinute : `0${newMinute}`

          return (_minute = newMinute);
        }
        return _minute;
      }
    };

    this.actions = {}

    this.actions.hours = {
      'ArrowUp': (e) => {
        e.preventDefault();
        const value = parseInt(_hour || 0) + 1;
        this.time.hour(value);
      },
      'ArrowDown': (e) => {
        e.preventDefault();
        const value = parseInt(_hour || 0) - 1;
        this.time.hour(value < 0 ? 23 : value);
      },
      'ArrowLeft': (e) => {
        e.preventDefault();
      },
      'ArrowRight': (e) => {
        e.preventDefault();
        this.dom.minutes.focus();
      }
    }

    this.actions.minutes = {
      'ArrowUp': (e) => {
        e.preventDefault();
        this.time.minute(parseInt(_minute || 0) + 1);
      },
      'ArrowDown': (e) => {
        e.preventDefault();
        const value = parseInt(_minute || 0) - 1;
        this.time.minute(value < 0 ? 59 : value);
      },
      'ArrowLeft': (e) => {
        e.preventDefault();
        this.dom.hours.focus();
      },
      'ArrowRight': (e) => {
        e.preventDefault();
        this.dom.clock.focus();
      }
    }

    this.actions.clock = {
      'ArrowLeft': (e) => {
        e.preventDefault();
        this.dom.minutes.focus();
      }
    }
  }

  hoursdown(e) {
    if ( this.reset && _.startsWith(e.code, 'Digit') ) {
      e.preventDefault();
      this.reset = false;
      this.time.hour(e.code[e.code.length - 1]);
    } else {
      const action = this.actions.hours[e.code];
      action ? action(e) : _.noop();
    }
  }

  hoursup(e) {
    if ( _.startsWith(e.code, 'Digit') &&
        parseInt(e.target.value) > 2) {
      this.dom.minutes.focus();
    }
  }

  minutesdown(e) {
    if ( this.reset && _.startsWith(e.code, 'Digit') ) {
      e.preventDefault();
      this.reset = false;
      this.time.minute(e.code[e.code.length - 1]);
    } else {
      const action = this.actions.minutes[e.code];
      action ? action(e) : _.noop();
    }
  }

  minutesup(e) {
    if ( _.startsWith(e.code, 'Digit') &&
        parseInt(e.target.value) > 5) {
      this.dom.clock.focus();
    }
  }

  clockdown(e) {
    const action = this.actions.clock[e.code];
    action ? action(e) : _.noop();
  }

  $postLink() {
    this.dom.hours   = $(this.$element).find('.hours');
    this.dom.minutes = $(this.$element).find('.minutes');
    this.dom.clock   = $(this.$element).find('.clock');
  }
}

export default UalTimepickerController;
