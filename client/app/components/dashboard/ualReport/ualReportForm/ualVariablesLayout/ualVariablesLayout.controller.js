class UalVariablesLayoutController {
  /*@ngInject*/
  constructor(ualTooltipService, $rootScope, $timeout, $filter, ualVariablesDeteleAllModal) {
    this.name = 'ualVariablesLayout';
    this._ualTooltipService = ualTooltipService;
    this._deleteallmodal = ualVariablesDeteleAllModal;
    this._filter = $filter;
    this._timeout = $timeout;

    this.selectedFilter = {
      name: ""
    };
    this.aggregatorsFilter = {
      name: ""
    };

    // VARS / PUBLIC
    this.loaded = false;

    this.scrolling = false;

    this.selectedsVariables = [];

    this.changeSelectedOrder = this.changeOrder('variables');
    this.changeAggregatorOrder = this.changeOrder('aggregators');

    this._suscriptions = [];
    this._suscriptions.push($rootScope.$on('DRAGGING.START', () => this.dragging = true));
    this._suscriptions.push($rootScope.$on('DRAGGING.END', () => this.dragging = false));
  }


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

  addVariables() { this.addSelection.bind(this)('variables') }
  addAggregators() { this.addSelection.bind(this)('aggregators') }

  addSelection(container) {
    let tmp = this[container].get();
    _.each(this.selectedsVariables, (item) => {
      if (item.selected)
        tmp.push(_.clone(item));
      item.selected = false;
    });
    this[container].set(this.rebaseOrder(tmp));
  }

  itemPosition(variable, container = this.variables.get()) {
    return _.findIndex(container, {
      'order': variable.order
    });
  }
  changeOrder(container) {
    return (variable, order) => {
      let tmp = this[container].get();
      _.remove(tmp, {
        'order': variable.order
      });
      $(".-hovered").removeClass("-hovered");
      tmp.splice(order - 1, 0, variable);
      this[container].set(tmp);
      tmp = null;
    };
  }
  isSelected(variable, container) {
    return _.find(container, {
      'order': variable.order
    });
  }
  deleteAll(container, filter) {
    this._deleteallmodal.open({
      deleting: (container == 'aggregators') ? "Selected Aggregators" : "Selected Variables"
    })
      .then(response => {
        if (response) {
          let tmp = this[container].get();
          const filters = this._filter("filterBy")(tmp, filter);
          const ids = _.map(filters, item => item.id);
          this[container].set(_.reject(tmp, item => _.includes(ids, item.id)));
        }
      });
  }
  onDrop(container) {
    return (id, binId) => {
      if(id.split("-")[1] != binId.split("-")[1]) return false;
      let from = _.parseInt(id.replace("agg_", "").split('_')[0]) - 1;
      let to = _.parseInt(binId.replace("agg_", "").split('_')[0]) - 1;
      let variable = _.clone(this[container].get()[from]);
      this.changeOrder(container)(variable, to + 1);
    }
  }

  removeVariable(variable, container = 'variables') {
    let tmp = this[container].get();
    this.isSelected(variable, tmp) ?
      _.remove(tmp, {
        'order': variable.order
      }) :
      this.hideTooltip();
    this[container].set(this.rebaseOrder(tmp));
  }

  rebaseOrder(container) {
    let pivot = [];
    let i = 0;
    while (container.length > 0) {
      pivot[i] = container.shift();
      pivot[i].order = i + 1;
      i++;
    }
    return pivot;
  }

  scrollTo(binId) {
    if (!this.scrolling) {
      let list = {
        e: $(".selected-list")
      };
      list.top = list.e.offset().top;
      list.height = list.e.height();
      list.bottom = list.top + list.height;

      let container = {
        e: $(".selected-list .mCSB_container")
      };
      container.top = container.e.position().top;
      container.height = container.e.height();
      container.bottom = container.top + container.height;

      let dragger = {
        e: $(".selected-list .mCSB_dragger")
      };
      dragger.height = dragger.e.height();

      let item = {
        e: $("#" + binId)
      };
      item.top = item.e.offset().top;
      item.height = item.e.height();
      item.bottom = item.top + item.height;

      if (!item.e.hasClass('last') && !item.e.hasClass('first')) {
        let timeout = this._timeout.bind(this);
        let move = item.height * 5;

        if ((item.top - (item.height * 0.9)) < list.top && list.top < item.bottom) {
          this.scrolling = true;
          container.top += move;
          container.top = container.top > 0 ? 0 : container.top;
        }
        if (item.top < list.bottom && list.bottom < (item.bottom + item.height)) {
          this.scrolling = true;
          container.top -= move;
          container.top = container.top < (list.height - container.height) ? (list.height - container.height) : container.top;
        }
        if (this.scrolling) {
          container.e.css({
            top: container.top
          });
          timeout(() => {
            this.scrolling = false;
            dragger.e.css({
              top: (container.top / (list.height - container.height)) * (list.height - dragger.height)
            });
            timeout(() => {
              !this.scrolling && list.e.mCustomScrollbar("update");
            }, 100);
          }, 500);
        }
      }
    }

  }
}

export default UalVariablesLayoutController;
