class ualSlicerMultipleSelectController {
  /*@ngInject*/
  constructor(
    // INTERNALS
    $timeout,
    DataSource) {
    this.name = 'ualSlicerMultipleSelect';

    // INTERNALS
    this.$timeout = $timeout;

    // SERVICES
    this.services = {
      datasource: DataSource
    };

    // STATE
    this.loading = true;
    this.filterTerm = {};
    this.ctrlDown = false;
  }

  // LIFECYCLE
  $onInit() {
    this.getvariables();
  }
  getvariables() {
    this.loading = true;
    this.services.datasource.variables({id:1})//HARDCODE change to service with available slicers
    .then(response => {
      this.loading = false;
      this.availableSlicers = response.data;
    },
    error => {
      this.loading = false;
      this.availableSlicers = [];
    });
  }

  // TOOLTIP
  showMore(variable) {
    this.$timeout(() => {
      const wrapper = $(`#available-variable-item-wrapper-${variable.id}`);
      const content = $(`#available-variable-item-content-${variable.id}`);

      const id = (wrapper.width() < content.width()) ?
        '#available-variable-item-wrapper-tooltip-' :
        '#available-variable-item-content-tooltip-';

      $(`${id}${variable.id}`).removeClass('ual-tooltip-hide');
    }, 200);
  }

  // SELECTION
  selectAll() {
    this.selectedReference = _.map(this.variablesFiltered,
      (item) => {
        item.selected = true;
        return item;
      }
    );
  }
  keyUp(event) {
    if ((event.which | event.keyCode) === 17) {
      this.ctrlDown = false;
    }
  }
  keyDown(event) {
    if ((event.which | event.keyCode) === 17) {
      this.ctrlDown = true;
      event.preventDefault();
    }
    if ((event.which | event.keyCode) === 65 && this.ctrlDown) {
      this.selectAll();
      event.preventDefault();
    }
  }

}

export default ualSlicerMultipleSelectController;