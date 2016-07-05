
  /**
   * Controller for a single calendar month.
   * ngInject @constructor
   */
class UalCalendarYearBodyController {
  /*@ngInject*/
  constructor($element, $$mdDateUtil, $mdDateLocale) {
    /** @final {!angular.JQLite} */
    this.$element = $element;

    /** @final */
    this.dateUtil = $$mdDateUtil;

    /** @final */
    this.dateLocale = $mdDateLocale;

    /** @type {Object} Reference to the calendar. */
    this.calendarCtrl = null;

    /** @type {Object} Reference to the year view. */
    this.yearCtrl = null;

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


  /** Generate and append the content for this year to the directive element. */
  generateContent() {
    var date = this.dateUtil.incrementYears(this.yearCtrl.firstRenderableDate, this.offset);

    this.$element.empty();
    this.$element.append(this.buildCalendarForYear(date));

    if (this.focusAfterAppend) {
      this.focusAfterAppend.classList.add(this.calendarCtrl.FOCUSED_DATE_CLASS);
      this.focusAfterAppend.focus();
      this.focusAfterAppend = null;
    }
  };

  /**
   * Creates a single cell to contain a year in the calendar.
   * @param {number} opt_year Four-digit year.
   * @param {number} opt_month Zero-indexed month.
   * @returns {HTMLElement}
   */
  buildMonthCell(year, month) {
    var calendarCtrl = this.calendarCtrl;
    var yearCtrl = this.yearCtrl;
    var cell = this.buildBlankCell();

    // Represent this month/year as a date.
    var firstOfMonth = new Date(year, month, 1);
    cell.setAttribute('aria-label', this.dateLocale.monthFormatter(firstOfMonth));
    cell.id = calendarCtrl.getDateId(firstOfMonth, 'year');

    // Use `data-timestamp` attribute because IE10 does not support the `dataset` property.
    cell.setAttribute('data-timestamp', firstOfMonth.getTime());

    if (this.dateUtil.isSameMonthAndYear(firstOfMonth, calendarCtrl.today)) {
      cell.classList.add(calendarCtrl.TODAY_CLASS);
    }

    if (this.dateUtil.isValidDate(calendarCtrl.selectedDate) &&
        this.dateUtil.isSameMonthAndYear(firstOfMonth, calendarCtrl.selectedDate)) {
      cell.classList.add(calendarCtrl.SELECTED_DATE_CLASS);
      cell.setAttribute('aria-selected', 'true');
    }

    var cellText = this.dateLocale.shortMonths[month];

    if (this.dateUtil.isDateWithinRange(firstOfMonth,
        calendarCtrl.minDate, calendarCtrl.maxDate)) {
      var selectionIndicator = document.createElement('span');
      selectionIndicator.classList.add('md-calendar-date-selection-indicator');
      selectionIndicator.textContent = cellText;
      cell.appendChild(selectionIndicator);
      cell.addEventListener('click', yearCtrl.cellClickHandler);

      if (calendarCtrl.displayDate && this.dateUtil.isSameMonthAndYear(firstOfMonth, calendarCtrl.displayDate)) {
        this.focusAfterAppend = cell;
      }
    } else {
      cell.classList.add('md-calendar-date-disabled');
      cell.textContent = cellText;
    }

    return cell;
  };

  /**
   * Builds a blank cell.
   * @return {HTMLTableCellElement}
   */
  buildBlankCell() {
    var cell = document.createElement('td');
    cell.tabIndex = -1;
    cell.classList.add('md-calendar-date');
    cell.setAttribute('role', 'gridcell');

    cell.setAttribute('tabindex', '-1');
    return cell;
  };

  /**
   * Builds the <tbody> content for the given year.
   * @param {Date} date Date for which the content should be built.
   * @returns {DocumentFragment} A document fragment containing the months within the year.
   */
  buildCalendarForYear(date) {
    // Store rows for the month in a document fragment so that we can append them all at once.
    var year = date.getFullYear();
    var yearBody = document.createDocumentFragment();

    var monthCell, i;
    // First row contains label and Jan-Jun.
    var firstRow = document.createElement('tr');
    var labelCell = document.createElement('td');
    labelCell.className = 'md-calendar-month-label';
    labelCell.textContent = year;
    firstRow.appendChild(labelCell);

    for (i = 0; i < 6; i++) {
      firstRow.appendChild(this.buildMonthCell(year, i));
    }
    yearBody.appendChild(firstRow);

    // Second row contains a blank cell and Jul-Dec.
    var secondRow = document.createElement('tr');
    secondRow.appendChild(this.buildBlankCell());
    for (i = 6; i < 12; i++) {
      secondRow.appendChild(this.buildMonthCell(year, i));
    }
    yearBody.appendChild(secondRow);

    return yearBody;
  };

}

export default UalCalendarYearBodyController;
