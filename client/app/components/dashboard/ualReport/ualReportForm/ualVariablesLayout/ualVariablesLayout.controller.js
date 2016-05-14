class UalVariablesLayoutController {
  /*@ngInject*/
  constructor(ualTooltipService, $rootScope) {
    this.name = 'ualVariablesLayout';
    this._ualTooltipService = ualTooltipService;
    this.selectedFilter = {
      name:""
    };

    // VARS / PUBLIC
    this.variables = {
        items: []
      }
      //    this.selecteds = _.clone(selecteds) || [];
    this.loaded = false;

    this._suscriptions = [];
    this._suscriptions.push($rootScope.$on('DRAGGING.START', () => this.dragging = true));
    this._suscriptions.push($rootScope.$on('DRAGGING.END', () => this.dragging = false));
  }

  showTooltip(container, description, position = 'top') {
    this._ualTooltipService.show({
      container: container
      , text: description
      , position: position
    });
  }
  hideTooltip() {
    this._ualTooltipService.hide();
  }


  itemPosition(variable) {
    return _.findIndex(this.selecteds, {
      'id': variable.id
    });
  }
  changeOrder(variable, order) {
    _.remove(this.selecteds, {
      'id': variable.id
    });
    $(".-hovered").removeClass("-hovered");
    this.selecteds.splice(order - 1, 0, variable);
  }
  isSelected(variable) {
    return _.find(this.selecteds, {
      'id': variable.id
    });
  }
  deleteAll() {
    this._deleteallmodal.open()
    .then(response => {
      if (response) {
        const filters = this._filter("filterBy")(this.selecteds, this.selectedFilter);
        const ids = _.map(filters, item => item.id);
        this.selecteds = _.reject(this.selecteds, item => _.includes(ids, item.id));
      }
    });
  }
  onDrop(id, binId) {
    let from =  _.parseInt(id.split('_')[0]) - 1;
    let to = _.parseInt(binId.split('_')[0]) - 1;
    let variable = this.selecteds[from];

    this.changeOrder(this.selecteds[from], to + 1);
  }




}

export default UalVariablesLayoutController;
