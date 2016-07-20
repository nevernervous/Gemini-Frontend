class UalVariablesController {
  /*@ngInject*/
  constructor(
    // INTERNALS
    $rootScope,
    $scope,
    ualDialog) {
    this.name = 'ualVariables';

    // INTERNALS
    this.$rootScope = $rootScope;
    this.$scope = $scope;

    // COMPONENTS
    this.components = {
      dialog: ualDialog
    }

    // STATE
    this._variables = {}
    this._aggregators = {}
    this.selectedsVariables = [];
    this._suscriptions = [];
  }

  $onInit() {
    // TODO: FIX! NOT DROPPABLE INPUT. http://bertrandg.github.io/html5-disable-drop-on-input/
    this._suscriptions.push(this.$rootScope.$on('DRAGGING.START', () => this.dragging = true));
    this._suscriptions.push(this.$rootScope.$on('DRAGGING.END', () => this.dragging = false));

    // RESET
    this.$scope.$watch((scope) => {
      return scope.vm.datasource
    }, (newValue, oldValue) => {
      this._variables = {
        isempty: true,
        total: 0,
        filter: ''
      }
      this._aggregators = {
        isempty: true,
        total: 0,
        filter: ''
      }
    });
  }

  // ADD
  addSelection(container, state) {
    while ( this.selectedsVariables.length > 0 ) {
      const item = this.selectedsVariables.pop();
      item.selected = false;
      container.push(angular.copy(item));
    }
    state.total = container.length;
    state.isempty = false;
  }
  addVariables()   { this.addSelection(this.variables.get(),   this._variables);   }
  addAggregators() { this.addSelection(this.aggregators.get(), this._aggregators); }


  // DELETE
  deleteAll(event, title, container, state) {
    this.components.dialog.confirm(
      `Delete all ${title.toLowerCase()}?`,
      null,
      { target: event })
    .then(() => {
      _.remove(container, item => item._visible);
      state.total = container.length;
      state.isempty = (state.total == 0);
    });
  }
  deleteAllVariables(event)   { this.deleteAll(event, "Selected Variables",   this.variables.get(),   this._variables);   }
  deleteAllAggregators(event) { this.deleteAll(event, "Selected Aggregators", this.aggregators.get(), this._aggregators); }

  deleteItem(index, container, state) {
    container.splice(index, 1);
    state.total = container.length;
    state.isempty = (state.total == 0);
  }
  deleteVariable(index)   { this.deleteItem(index, this.variables.get(),   this._variables);   }
  deleteAggregator(index) { this.deleteItem(index, this.aggregators.get(), this._aggregators); }

  // ORDER
  changeOrder(container, oldOrder, newOrder) {
    const item = container[oldOrder];
    container.splice(oldOrder, 1);
    container.splice(newOrder, 0, item);
  }
  changeVariables(from, to)  { this.changeOrder(this.variables.get(), from, to); }
  onDropVariables(id, binId) { this.changeOrder(this.variables.get(), id.split("_")[0], binId.split("_")[0]); }
  changeAggregators(from, to)  { this.changeOrder(this.aggregators.get(), from, to); }
  onDropAggregators(id, binId) { this.changeOrder(this.aggregators.get(), id.split("_")[0], binId.split("_")[0]); }

}

export default UalVariablesController;
