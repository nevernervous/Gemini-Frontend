
  /**
   * Controller for a single calendar month.
   * ngInject @constructor
   */
class UalCalendarMonthBodyController {
  /*@ngInject*/
  constructor($element, $$mdDateUtil, $mdDateLocale) {
    /** @final {!angular.JQLite} */
    this.$element = $element;

    /** @final */
    this.dateUtil = $$mdDateUtil;

    /** @final */
    this.dateLocale = $mdDateLocale;

    /** @type {Object} Reference to the month view. */
    this.monthCtrl = null;

    /** @type {Object} Reference to the calendar. */
    this.calendarCtrl = null;

    /**
     * Number of months from the start of the month "items" that the currently rendered month
     * occurs. Set via angular data binding.
     * @type {number}
     */
    this.offset = null;

    /**
     * Date cell to focus after appending the month to the document.
     * @type {HTMLElement}
     */
    this.focusAfterAppend = null;
  }

  /** Generate and append the content for this month to the directive element. */
  generateContent() {
    var date = this.dateUtil.incrementMonths(this.monthCtrl.firstRenderableDate, this.offset);

    this.$element.empty();
    this.$element.append(this.buildCalendarForMonth(date));

    if (this.focusAfterAppend) {
      this.focusAfterAppend.classList.add(this.calendarCtrl.FOCUSED_DATE_CLASS);
      this.focusAfterAppend.focus();
      this.focusAfterAppend = null;
    }
  };

  /**
   * Creates a single cell to contain a date in the calendar with all appropriate
   * attributes and classes added. If a date is given, the cell content will be set
   * based on the date.
   * @param {Date=} opt_date
   * @returns {HTMLElement}
   */
  buildDateCell(opt_date) {
    var monthCtrl = this.monthCtrl;
    var calendarCtrl = this.calendarCtrl;

    // TODO(jelbourn): cloneNode is likely a faster way of doing this.
    var cell = document.createElement('td');
    cell.tabIndex = -1;
    cell.classList.add('md-calendar-date');
    cell.setAttribute('role', 'gridcell');

    if (opt_date) {
      cell.setAttribute('tabindex', '-1');
      cell.setAttribute('aria-label', this.dateLocale.longDateFormatter(opt_date));
      cell.id = calendarCtrl.getDateId(opt_date, 'month');

      // Use `data-timestamp` attribute because IE10 does not support the `dataset` property.
      cell.setAttribute('data-timestamp', opt_date.getTime());

      // TODO(jelourn): Doing these comparisons for class addition during generation might be slow.
      // It may be better to finish the construction and then query the node and add the class.
      if (this.dateUtil.isSameDay(opt_date, calendarCtrl.today)) {
        cell.classList.add(calendarCtrl.TODAY_CLASS);
      }

      if (this.dateUtil.isValidDate(calendarCtrl.selectedDate) &&
          this.dateUtil.isSameDay(opt_date, calendarCtrl.selectedDate)) {
        cell.classList.add(calendarCtrl.SELECTED_DATE_CLASS);
        cell.setAttribute('aria-selected', 'true');
      }

      var cellText = this.dateLocale.dates[opt_date.getDate()];

      if (this.isDateEnabled(opt_date)) {
        // Add a indicator for select, hover, and focus states.
        var selectionIndicator = document.createElement('span');
        selectionIndicator.classList.add('md-calendar-date-selection-indicator');
        selectionIndicator.textContent = cellText;
        cell.appendChild(selectionIndicator);
        cell.addEventListener('click', monthCtrl.cellClickHandler);

        if (calendarCtrl.displayDate && this.dateUtil.isSameDay(opt_date, calendarCtrl.displayDate)) {
          this.focusAfterAppend = cell;
        }
      } else {
        cell.classList.add('md-calendar-date-disabled');
        cell.textContent = cellText;
      }
    }

    return cell;
  };

  /**
   * Check whether date is in range and enabled
   * @param {Date=} opt_date
   * @return {boolean} Whether the date is enabled.
   */
  isDateEnabled(opt_date) {
    return this.dateUtil.isDateWithinRange(opt_date,
          this.calendarCtrl.minDate, this.calendarCtrl.maxDate) &&
          (!angular.isFunction(this.calendarCtrl.dateFilter)
           || this.calendarCtrl.dateFilter(opt_date));
  };

  /**
   * Builds a `tr` element for the calendar grid.
   * @param rowNumber The week number within the month.
   * @returns {HTMLElement}
   */
  buildDateRow(rowNumber) {
    var row = document.createElement('tr');
    row.setAttribute('role', 'row');

    // Because of an NVDA bug (with Firefox), the row needs an aria-label in order
    // to prevent the entire row being read aloud when the user moves between rows.
    // See http://community.nvda-project.org/ticket/4643.
    row.setAttribute('aria-label', this.dateLocale.weekNumberFormatter(rowNumber));

    return row;
  };

  /**
   * Builds the <tbody> content for the given date's month.
   * @param {Date=} opt_dateInMonth
   * @returns {DocumentFragment} A document fragment containing the <tr> elements.
   */
  buildCalendarForMonth(opt_dateInMonth) {
    var date = this.dateUtil.isValidDate(opt_dateInMonth) ? opt_dateInMonth : new Date();

    var firstDayOfMonth = this.dateUtil.getFirstDateOfMonth(date);
    var firstDayOfTheWeek = this.getLocaleDay_(firstDayOfMonth);
    var numberOfDaysInMonth = this.dateUtil.getNumberOfDaysInMonth(date);

    // Store rows for the month in a document fragment so that we can append them all at once.
    var monthBody = document.createDocumentFragment();

    var rowNumber = 1;
    var row = this.buildDateRow(rowNumber);
    monthBody.appendChild(row);

    // If this is the final month in the list of items, only the first week should render,
    // so we should return immediately after the first row is complete and has been
    // attached to the body.
    var isFinalMonth = this.offset === this.monthCtrl.items.length - 1;

    // Add a label for the month. If the month starts on a Sun/Mon/Tues, the month label
    // goes on a row above the first of the month. Otherwise, the month label takes up the first
    // two cells of the first row.
    var blankCellOffset = 0;
    var monthLabelCell = document.createElement('td');
    monthLabelCell.textContent = this.dateLocale.monthHeaderFormatter(date);
    monthLabelCell.classList.add('md-calendar-month-label');
    // If the entire month is after the max date, render the label as a disabled state.
    if (this.calendarCtrl.maxDate && firstDayOfMonth > this.calendarCtrl.maxDate) {
      monthLabelCell.classList.add('md-calendar-month-label-disabled');
    } else {
      monthLabelCell.addEventListener('click', this.monthCtrl.headerClickHandler);
      monthLabelCell.setAttribute('data-timestamp', firstDayOfMonth.getTime());
      monthLabelCell.setAttribute('aria-label', this.dateLocale.monthFormatter(date));
    }

    if (firstDayOfTheWeek <= 2) {
      monthLabelCell.setAttribute('colspan', '7');

      var monthLabelRow = this.buildDateRow();
      monthLabelRow.appendChild(monthLabelCell);
      monthBody.insertBefore(monthLabelRow, row);

      if (isFinalMonth) {
        return monthBody;
      }
    } else {
      blankCellOffset = 2;
      monthLabelCell.setAttribute('colspan', '2');
      row.appendChild(monthLabelCell);
    }

    // Add a blank cell for each day of the week that occurs before the first of the month.
    // For example, if the first day of the month is a Tuesday, add blank cells for Sun and Mon.
    // The blankCellOffset is needed in cases where the first N cells are used by the month label.
    for (var i = blankCellOffset; i < firstDayOfTheWeek; i++) {
      row.appendChild(this.buildDateCell());
    }

    // Add a cell for each day of the month, keeping track of the day of the week so that
    // we know when to start a new row.
    var dayOfWeek = firstDayOfTheWeek;
    var iterationDate = firstDayOfMonth;
    for (var d = 1; d <= numberOfDaysInMonth; d++) {
      // If we've reached the end of the week, start a new row.
      if (dayOfWeek === 7) {
        // We've finished the first row, so we're done if this is the final month.
        if (isFinalMonth) {
          return monthBody;
        }
        dayOfWeek = 0;
        rowNumber++;
        row = this.buildDateRow(rowNumber);
        monthBody.appendChild(row);
      }

      iterationDate.setDate(d);
      var cell = this.buildDateCell(iterationDate);
      row.appendChild(cell);

      dayOfWeek++;
    }

    // Ensure that the last row of the month has 7 cells.
    while (row.childNodes.length < 7) {
      row.appendChild(this.buildDateCell());
    }

    // Ensure that all months have 6 rows. This is necessary for now because the virtual-repeat
    // requires that all items have exactly the same height.
    while (monthBody.childNodes.length < 6) {
      var whitespaceRow = this.buildDateRow();
      for (var j = 0; j < 7; j++) {
        whitespaceRow.appendChild(this.buildDateCell());
      }
      monthBody.appendChild(whitespaceRow);
    }

    return monthBody;
  };

  /**
   * Gets the day-of-the-week index for a date for the current locale.
   * @private
   * @param {Date} date
   * @returns {number} The column index of the date in the calendar.
   */
  getLocaleDay_(date) {
    return (date.getDay() + (7 - this.dateLocale.firstDayOfWeek)) % 7;
  };
}

export default UalCalendarMonthBodyController;
