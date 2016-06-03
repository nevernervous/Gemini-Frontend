class UalVariablesLayoutController {
  /*@ngInject*/
  constructor($rootScope, $scope, ualVariablesDeteleAllModal, ualTooltipService) {
    this.name = 'ualVariablesLayout';
    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this._ualTooltipService = ualTooltipService;
    this._deleteallmodal = ualVariablesDeteleAllModal;

    this._suscriptions = [];

    // VARS / PUBLIC
    this._variables = {}
    this._aggregators = {}
    this.selectedsVariables = [];
  }

  $onInit() {
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

  // TOOLTIP
  showTooltip(container, description, position = 'top') {
    this._ualTooltipService.show({
      container: container,
      text: description,
      position: position
    });
  }
  hideTooltip() {
    this._ualTooltipService.hide();
  }

  // ADD
  addSelection(container, state) {
    _.each(this.selectedsVariables, (item) => {
      item.selected = false;
      container.push(angular.copy(item));
    });
    state.total = container.length;
    state.isempty = false;
  }
  addVariables()   { this.addSelection(this.variables.get(),   this._variables);   }
  addAggregators() { this.addSelection(this.aggregators.get(), this._aggregators); }


  // DELETE
  deleteAll(title, container, state) {
    this._deleteallmodal.open({ deleting: title})
    .then(response => {
      if (response) {
        _.remove(container, item => item._visible);
        state.total = container.length;
        state.isempty = (state.total == 0);
      }
    });
  }
  deleteAllVariables()   { this.deleteAll("Selected Variables",   this.variables.get(),   this._variables);   }
  deleteAllAggregators() { this.deleteAll("Selected Aggregatros", this.aggregators.get(), this._aggregators); }

  deleteItem(index, container, state) {
    container.splice(index, 1);
    state.total = container.length;
    state.isempty = (state.total == 0);
  }
  deleteVariable(index)   { this.deleteItem(index, this.variables.get(),   this._variables);   }
  deleteAggregator(index) { this.deleteItem(index, this.aggregators.get(), this._aggregators); }

  // ORDER
  onDrop(container) {
    return (id, binId) => {
      if(id.split("-")[1] != binId.split("-")[1]) return false;
      let from = _.parseInt(id.replace("agg_", "").split('_')[0]) - 1;
      let to = _.parseInt(binId.replace("agg_", "").split('_')[0]) - 1;
      let variable = _.clone(this[container].get()[from]);
      this.changeOrder(container)(variable, to + 1);
    }
  }
  changeOrder(container, item, oldOrder, newOrder) {
    container.splice(oldOrder, 1);
    container.splice(newOrder, 0, item);
  }
  changeVariablesOrder(item, oldOrder, newOrder) { this.changeOrder(this.variables.get(), item, oldOrder, newOrder); }

}

export default UalVariablesLayoutController;
