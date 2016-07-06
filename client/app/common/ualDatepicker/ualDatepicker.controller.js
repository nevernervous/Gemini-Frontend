/** Additional offset for the input's `size` attribute, which is updated based on its content. */
const EXTRA_INPUT_SIZE = 3;

/** Class applied to the container if the date is invalid. */
const INVALID_CLASS = 'md-datepicker-invalid';

/** Default time in ms to debounce input event by. */
const DEFAULT_DEBOUNCE_INTERVAL = 500;

/**
* Height of the calendar pane used to check if the pane is going outside the boundary of
* the viewport. See calendar.scss for how $md-calendar-height is computed; an extra 20px is
* also added to space the pane away from the exact edge of the screen.
*
*  This is computed statically now, but can be changed to be measured if the circumstances
*  of calendar sizing are changed.
*/
const CALENDAR_PANE_HEIGHT = 368;

/**
* Width of the calendar pane used to check if the pane is going outside the boundary of
* the viewport. See calendar.scss for how $md-calendar-width is computed; an extra 20px is
* also added to space the pane away from the exact edge of the screen.
*
*  This is computed statically now, but can be changed to be measured if the circumstances
*  of calendar sizing are changed.
*/
const CALENDAR_PANE_WIDTH = 360;

class UalDatepickerController {
  /*@ngInject*/
  constructor($scope, $element, $attrs, $compile, $timeout, $window,
    $mdConstant, $mdTheming, $mdUtil, $mdDateLocale, $$mdDateUtil, $$rAF) {
    this.name = 'ualDatepicker';

    /** @final */
    this.$compile = $compile;

    /** @final */
    this.$timeout = $timeout;

    /** @final */
    this.$window = $window;

    /** @final */
    this.dateLocale = $mdDateLocale;

    /** @final */
    this.dateUtil = $$mdDateUtil;

    /** @final */
    this.$mdConstant = $mdConstant;

    /* @final */
    this.$mdUtil = $mdUtil;

    /** @final */
    this.$$rAF = $$rAF;

    /**
    * The root document element. This is used for attaching a top-level click handler to
    * close the calendar panel when a click outside said panel occurs. We use `documentElement`
    * instead of body because, when scrolling is disabled, some browsers consider the body element
    * to be completely off the screen and propagate events directly to the html element.
    * @type {!angular.JQLite}
    */
    this.documentElement = angular.element(document.documentElement);

    /** @type {!angular.NgModelController} */
    this.ngModelCtrl = null;

    /** @type {HTMLInputElement} */
    this.inputElement = $element[0].querySelector('input');

    /** @final {!angular.JQLite} */
    this.ngInputElement = angular.element(this.inputElement);

    /** @type {HTMLElement} */
    this.inputContainer = $element[0].querySelector('.md-datepicker-input-container');

    /** @type {HTMLElement} Floating calendar pane. */
    this.calendarPane = $element[0].querySelector('.md-datepicker-calendar-pane');

    /** @type {HTMLElement} Calendar icon button. */
    this.calendarButton = $element[0].querySelector('.md-datepicker-button');

    /**
    * Element covering everything but the input in the top of the floating calendar pane.
    * @type {HTMLElement}
    */
    this.inputMask = $element[0].querySelector('.md-datepicker-input-mask-opaque');

    /** @final {!angular.JQLite} */
    this.$element = $element;

    /** @final {!angular.Attributes} */
    this.$attrs = $attrs;

    /** @final {!angular.Scope} */
    this.$scope = $scope;

    /** @type {Date} */
    this.date = null;

    /** @type {boolean} */
    this.isFocused = false;

    /** @type {boolean} */
    this.isDisabled;
    this.setDisabled($element[0].disabled || angular.isString($attrs.disabled));

    /** @type {boolean} Whether the date-picker's calendar pane is open. */
    this.isCalendarOpen = false;

    /** @type {boolean} Whether the calendar should open when the input is focused. */
    this.openOnFocus = $attrs.hasOwnProperty('mdOpenOnFocus');

    /**
    * Element from which the calendar pane was opened. Keep track of this so that we can return
    * focus to it when the pane is closed.
    * @type {HTMLElement}
    */
    this.calendarPaneOpenedFrom = null;

    this.calendarPane.id = 'md-date-pane' + $mdUtil.nextUid();

    $mdTheming($element);

    /** Pre-bound click handler is saved so that the event listener can be removed. */
    this.bodyClickHandler = angular.bind(this, this.handleBodyClick);

    /** Pre-bound resize handler so that the event listener can be removed. */
    this.windowResizeHandler = $mdUtil.debounce(angular.bind(this, this.closeCalendarPane), 100);

    // Unless the user specifies so, the datepicker should not be a tab stop.
    // This is necessary because ngAria might add a tabindex to anything with an ng-model
    // (based on whether or not the user has turned that particular feature on/off).
    if (!$attrs.tabindex) {
      $element.attr('tabindex', '-1');
    }
  }

  $onInit() {
    this.installPropertyInterceptors();
    this.attachChangeListeners();
    this.attachInteractionListeners();
  }

  $onDestroy() {
    this.detachCalendarPane();
  }

  /**
  * Sets up the controller's reference to ngModelController.
  * @param {!angular.NgModelController} ngModelCtrl
  */
  configureNgModel(ngModelCtrl) {
    this.ngModelCtrl = ngModelCtrl;

    var self = this;
    ngModelCtrl.$render = function() {
      var value = self.ngModelCtrl.$viewValue;

      if (value && !(value instanceof Date)) {
        throw Error('The ng-model for md-datepicker must be a Date instance. ' +
        'Currently the model is a: ' + (typeof value));
      }

      self.date = value;
      //self.inputElement.value = self.dateLocale.formatDate(value);
      self.resizeInputElement();
      self.updateErrorState();
    };
  }

  /**
  * Attach event listeners for both the text input and the md-calendar.
  * Events are used instead of ng-model so that updates don't infinitely update the other
  * on a change. This should also be more performant than using a $watch.
  */
  attachChangeListeners() {
    var self = this;

    self.$scope.$on('md-calendar-change', function(event, date) {
      self.ngModelCtrl.$setViewValue(date);
      self.date = date;
      //self.inputElement.value = self.dateLocale.formatDate(date);
      self.closeCalendarPane();
      self.resizeInputElement();
      self.updateErrorState();
    });

    self.ngInputElement.on('input', angular.bind(self, self.resizeInputElement));
    // TODO(chenmike): Add ability for users to specify this interval.
    self.ngInputElement.on('input', self.$mdUtil.debounce(self.handleInputEvent,
      DEFAULT_DEBOUNCE_INTERVAL, self));
  };

    /** Attach event listeners for user interaction. */
  attachInteractionListeners () {
    var self = this;
    var $scope = this.$scope;
    var keyCodes = this.$mdConstant.KEY_CODE;

    // Add event listener through angular so that we can triggerHandler in unit tests.
    self.ngInputElement.on('keydown', function(event) {
      if (event.altKey && event.keyCode == keyCodes.DOWN_ARROW) {
        self.openCalendarPane(event);
        $scope.$digest();
      }
    });

    if (self.openOnFocus) {
      self.ngInputElement.on('focus', angular.bind(self, self.openCalendarPane));
    }

    $scope.$on('md-calendar-close', function() {
      self.closeCalendarPane();
    });
  }

  /**
  * Capture properties set to the date-picker and imperitively handle internal changes.
  * This is done to avoid setting up additional $watches.
  */
  installPropertyInterceptors() {
    var self = this;

    if (this.$attrs.ngDisabled) {
      // The expression is to be evaluated against the directive element's scope and not
      // the directive's isolate scope.
      var scope = this.$scope.$parent;

      if (scope) {
        scope.$watch(this.$attrs.ngDisabled, function(isDisabled) {
          self.setDisabled(isDisabled);
        });
      }
    }

    Object.defineProperty(this, 'placeholder', {
      get: function() { return self.inputElement.placeholder; },
      set: function(value) { self.inputElement.placeholder = value || ''; }
    });
  }

  /**
  * Sets whether the date-picker is disabled.
  * @param {boolean} isDisabled
  */
  setDisabled(isDisabled) {
    this.isDisabled = isDisabled;
    this.inputElement.disabled = isDisabled;
    // this.calendarButton.disabled = isDisabled;
  }

  /**
  * Sets the custom ngModel.$error flags to be consumed by ngMessages. Flags are:
  *   - mindate: whether the selected date is before the minimum date.
  *   - maxdate: whether the selected flag is after the maximum date.
  *   - filtered: whether the selected date is allowed by the custom filtering function.
  *   - valid: whether the entered text input is a valid date
  *
  * The 'required' flag is handled automatically by ngModel.
  *
  * @param {Date=} opt_date Date to check. If not given, defaults to the datepicker's model value.
  */
  updateErrorState(opt_date) {
    var date = opt_date || this.date;

    // Clear any existing errors to get rid of anything that's no longer relevant.
    this.clearErrorState();

    if (this.dateUtil.isValidDate(date)) {
      // Force all dates to midnight in order to ignore the time portion.
      date = this.dateUtil.createDateAtMidnight(date);

      if (this.dateUtil.isValidDate(this.minDate)) {
        var minDate = this.dateUtil.createDateAtMidnight(this.minDate);
        this.ngModelCtrl.$setValidity('mindate', date >= minDate);
      }

      if (this.dateUtil.isValidDate(this.maxDate)) {
        var maxDate = this.dateUtil.createDateAtMidnight(this.maxDate);
        this.ngModelCtrl.$setValidity('maxdate', date <= maxDate);
      }

      if (angular.isFunction(this.dateFilter)) {
        this.ngModelCtrl.$setValidity('filtered', this.dateFilter(date));
      }
    } else {
      // The date is seen as "not a valid date" if there is *something* set
      // (i.e.., not null or undefined), but that something isn't a valid date.
      this.ngModelCtrl.$setValidity('valid', date == null);
    }

    // TODO(jelbourn): Change this to classList.toggle when we stop using PhantomJS in unit tests
    // because it doesn't conform to the DOMTokenList spec.
    // See https://github.com/ariya/phantomjs/issues/12782.
    if (!this.ngModelCtrl.$valid) {
      this.inputContainer.classList.add(INVALID_CLASS);
    }
  }

  /** Clears any error flags set by `updateErrorState`. */
  clearErrorState() {
    this.inputContainer.classList.remove(INVALID_CLASS);
    ['mindate', 'maxdate', 'filtered', 'valid'].forEach(function(field) {
      this.ngModelCtrl.$setValidity(field, true);
    }, this);
  }

  /** Resizes the input element based on the size of its content. */
  resizeInputElement() {
    this.inputElement.size = this.inputElement.value.length + EXTRA_INPUT_SIZE;
  }

  /**
  * Sets the model value if the user input is a valid date.
  * Adds an invalid class to the input element if not.
  */
  handleInputEvent() {
    var inputString = this.inputElement.value;
    var parsedDate = inputString ? this.dateLocale.parseDate(inputString) : null;
    this.dateUtil.setDateTimeToMidnight(parsedDate);

    // An input string is valid if it is either empty (representing no date)
    // or if it parses to a valid date that the user is allowed to select.
    var isValidInput = inputString == '' || (
      this.dateUtil.isValidDate(parsedDate) &&
      this.dateLocale.isDateComplete(inputString) &&
      this.isDateEnabled(parsedDate)
    );

    // The datepicker's model is only updated when there is a valid input.
    if (isValidInput) {
      this.ngModelCtrl.$setViewValue(parsedDate);
      this.date = parsedDate;
    }

    this.updateErrorState(parsedDate);
  }

  /**
  * Check whether date is in range and enabled
  * @param {Date=} opt_date
  * @return {boolean} Whether the date is enabled.
  */
  isDateEnabled(opt_date) {
    return this.dateUtil.isDateWithinRange(opt_date, this.minDate, this.maxDate) &&
    (!angular.isFunction(this.dateFilter) || this.dateFilter(opt_date));
  }

  /** Position and attach the floating calendar to the document. */
  attachCalendarPane() {
    var calendarPane = this.calendarPane;
    var body = document.body;

    calendarPane.style.transform = '';
    this.$element.addClass('md-datepicker-open');
    angular.element(body).addClass('md-datepicker-is-showing');

    var elementRect = this.inputContainer.getBoundingClientRect();
    var bodyRect = body.getBoundingClientRect();

    // Check to see if the calendar pane would go off the screen. If so, adjust position
    // accordingly to keep it within the viewport.
    var paneTop = elementRect.top - bodyRect.top;
    var paneLeft = elementRect.left - bodyRect.left;

    // If ng-material has disabled body scrolling (for example, if a dialog is open),
    // then it's possible that the already-scrolled body has a negative top/left. In this case,
    // we want to treat the "real" top as (0 - bodyRect.top). In a normal scrolling situation,
    // though, the top of the viewport should just be the body's scroll position.
    var viewportTop = (bodyRect.top < 0 && document.body.scrollTop == 0) ?
    -bodyRect.top :
    document.body.scrollTop;

    var viewportLeft = (bodyRect.left < 0 && document.body.scrollLeft == 0) ?
    -bodyRect.left :
    document.body.scrollLeft;

    var viewportBottom = viewportTop + this.$window.innerHeight;
    var viewportRight = viewportLeft + this.$window.innerWidth;

    // If the right edge of the pane would be off the screen and shifting it left by the
    // difference would not go past the left edge of the screen. If the calendar pane is too
    // big to fit on the screen at all, move it to the left of the screen and scale the entire
    // element down to fit.
    if (paneLeft + CALENDAR_PANE_WIDTH > viewportRight) {
      if (viewportRight - CALENDAR_PANE_WIDTH > 0) {
        paneLeft = viewportRight - CALENDAR_PANE_WIDTH;
      } else {
        paneLeft = viewportLeft;
        var scale = this.$window.innerWidth / CALENDAR_PANE_WIDTH;
        calendarPane.style.transform = 'scale(' + scale + ')';
      }

      calendarPane.classList.add('md-datepicker-pos-adjusted');
    }

    // If the bottom edge of the pane would be off the screen and shifting it up by the
    // difference would not go past the top edge of the screen.
    if (paneTop + CALENDAR_PANE_HEIGHT > viewportBottom &&
      viewportBottom - CALENDAR_PANE_HEIGHT > viewportTop) {
      paneTop = viewportBottom - CALENDAR_PANE_HEIGHT;
      calendarPane.classList.add('md-datepicker-pos-adjusted');
    }

    calendarPane.style.left = paneLeft + 'px';
    calendarPane.style.top = paneTop + 'px';
    document.body.appendChild(calendarPane);

    // The top of the calendar pane is a transparent box that shows the text input underneath.
    // Since the pane is floating, though, the page underneath the pane *adjacent* to the input is
    // also shown unless we cover it up. The inputMask does this by filling up the remaining space
    // based on the width of the input.
    this.inputMask.style.left = elementRect.width + 'px';

    // Add CSS class after one frame to trigger open animation.
    this.$$rAF(function() {
      calendarPane.classList.add('md-pane-open');
    });
  }

  /** Detach the floating calendar pane from the document. */
  detachCalendarPane() {
    this.$element.removeClass('md-datepicker-open');
    angular.element(document.body).removeClass('md-datepicker-is-showing');
    this.calendarPane.classList.remove('md-pane-open');
    this.calendarPane.classList.remove('md-datepicker-pos-adjusted');

    if (this.isCalendarOpen) {
      this.$mdUtil.enableScrolling();
    }

    if (this.calendarPane.parentNode) {
      // Use native DOM removal because we do not want any of the angular state of this element
      // to be disposed.
      this.calendarPane.parentNode.removeChild(this.calendarPane);
    }
  }

  /**
  * Open the floating calendar pane.
  * @param {Event} event
  */
  openCalendarPane(event) {
    if (!this.isCalendarOpen && !this.isDisabled) {
      this.isCalendarOpen = true;
      this.calendarPaneOpenedFrom = event.target;

      // Because the calendar pane is attached directly to the body, it is possible that the
      // rest of the component (input, etc) is in a different scrolling container, such as
      // an md-content. This means that, if the container is scrolled, the pane would remain
      // stationary. To remedy this, we disable scrolling while the calendar pane is open, which
      // also matches the native behavior for things like `<select>` on Mac and Windows.
      this.$mdUtil.disableScrollAround(this.calendarPane);

      this.attachCalendarPane();
      this.focusCalendar();

      // Attach click listener inside of a timeout because, if this open call was triggered by a
      // click, we don't want it to be immediately propogated up to the body and handled.
      var self = this;
      this.$mdUtil.nextTick(function() {
        // Use 'touchstart` in addition to click in order to work on iOS Safari, where click
        // events aren't propogated under most circumstances.
        // See http://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        self.documentElement.on('click touchstart', self.bodyClickHandler);
      }, false);

      window.addEventListener('resize', this.windowResizeHandler);
    }
  }

  /** Close the floating calendar pane. */
  closeCalendarPane() {
    if (this.isCalendarOpen) {
      var self = this;

      self.calendarPaneOpenedFrom.focus();
      self.calendarPaneOpenedFrom = null;

      if (self.openOnFocus) {
        // Ensures that all focus events have fired before detaching
        // the calendar. Prevents the calendar from reopening immediately
        // in IE when md-open-on-focus is set. Also it needs to trigger
        // a digest, in order to prevent issues where the calendar wasn't
        // showing up on the next open.
        this.$mdUtil.nextTick(detach);
      } else {
        detach();
      }
    }

    function detach() {
      self.detachCalendarPane();
      self.isCalendarOpen = false;
      self.ngModelCtrl.$setTouched();

      self.documentElement.off('click touchstart', self.bodyClickHandler);
      window.removeEventListener('resize', self.windowResizeHandler);
    }
  }

  /** Gets the controller instance for the calendar in the floating pane. */
  getCalendarCtrl() {
    return angular.element(this.calendarPane.querySelector('ual-calendar')).controller('ualCalendar');
  }

  /** Focus the calendar in the floating pane. */
  focusCalendar() {
    // Use a timeout in order to allow the calendar to be rendered, as it is gated behind an ng-if.
    var self = this;
    this.$mdUtil.nextTick(function() {
      self.getCalendarCtrl().focus();
    }, false);
  }

  /**
  * Sets whether the input is currently focused.
  * @param {boolean} isFocused
  */
  setFocused(isFocused) {
    if (!isFocused) {
      this.ngModelCtrl.$setTouched();
    }
    this.isFocused = isFocused;
  }

  /**
  * Handles a click on the document body when the floating calendar pane is open.
  * Closes the floating calendar pane if the click is not inside of it.
  * @param {MouseEvent} event
  */
  handleBodyClick(event) {
    if (this.isCalendarOpen) {
      // TODO(jelbourn): way want to also include the md-datepicker itself in this check.
      var closest = this.$mdUtil.getClosest;
      var isInCalendar = closest(event.target, 'ual-calendar-year') || closest(event.target, 'ual-calendar-month');

      if (!isInCalendar) {
        this.closeCalendarPane();
      }

      this.$scope.$digest();
    }
  }
}

export default UalDatepickerController;
