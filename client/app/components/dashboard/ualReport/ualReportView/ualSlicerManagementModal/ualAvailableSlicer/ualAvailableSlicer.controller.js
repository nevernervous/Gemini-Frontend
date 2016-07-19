class UalAvailableSlicerController {
  /*@ngInject*/
  constructor(
    // INTERNALS
    $rootScope,
    $scope,
    ualDialog) {
    this.name = 'ualAvailableSlicer';

    // INTERNALS
    this.$rootScope = $rootScope;
    this.$scope = $scope;

    // COMPONENTS
    this.components = {
      dialog: ualDialog
    }

    // STATE
    this._slicers =  {
        isempty: true,
        total: 0,
        filter: ''
      }
    this.selectedSlicers = [];
  }

  // ADD
  addSelection(container, state) {
    this.selectedSlicers.reverse();
    while ( this.selectedSlicers.length > 0 ) {
      let item = this.selectedSlicers.pop();
      item.selected = false;
      container.push(angular.copy(item));
    }
    state.total = container.length;
    state.isempty = false;
  }
  addSlicers()   { this.addSelection(this.slicers,   this._slicers);   }

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
  deleteAllSlicers(event)   { this.deleteAll(event, "slicers",   this.slicers,   this._slicers);   }

  deleteItem(index, container, state) {
    container.splice(index, 1);
    state.total = container.length;
    state.isempty = (state.total == 0);
  }
  deleteSlicer(index)   { this.deleteItem(index, this.slicers,   this._slicers);   }

}

export default UalAvailableSlicerController;
