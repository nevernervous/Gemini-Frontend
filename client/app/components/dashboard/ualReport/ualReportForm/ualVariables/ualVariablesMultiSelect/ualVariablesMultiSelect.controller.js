
// TODO: Try with clusterize
// TODO: Tooltip max left approach
// TODO: check variables order, or transform in service
class UalVariablesMultiSelectController {
  /*@ngInject*/
  constructor(
    // INTERNALS
    $scope,
    $timeout,
    DataSource) {
    this.name = 'ualVariablesMultiSelect';

    // INTERNALS
    this.$scope = $scope;
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
  // TODO: Try ON CHANGE lifecycle
  $onInit() {
    this.$scope.$watch((scope) => {
      return scope.vm.datasource
    }, (newValue, oldValue) => {
      if (newValue !== oldValue && newValue) {
        this.getvariables();
      }
    });
  }
  getvariables() {
    this.loading = true;
    this.services.datasource.variables(this.datasource)
    .then(response => {
      this.loading = false;
      this.avaiableVariables = response.data;
    },
    error => {
      this.loading = false;
      this.avaiableVariables = [];
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

  // SELECTION (to correct operation add 'tabindex' in HTML)
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

export default UalVariablesMultiSelectController;
