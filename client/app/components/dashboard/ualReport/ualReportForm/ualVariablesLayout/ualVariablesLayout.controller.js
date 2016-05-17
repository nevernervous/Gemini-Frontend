class UalVariablesLayoutController {
  /*@ngInject*/
  constructor(ualTooltipService, $rootScope, $timeout , $filter , ualVariablesDeteleAllModal) {
    this.name = 'ualVariablesLayout';
    this._ualTooltipService = ualTooltipService;
    this._deleteallmodal = ualVariablesDeteleAllModal;
    this._filter = $filter;
    this._timeout = $timeout;

    this.selectedFilter = {name:""};
    this.aggregatorsFilter = {name:""};

    // VARS / PUBLIC
    this.variables = {
        items: []
      }
      //    this.selecteds = _.clone(selecteds) || [];
    this.loaded = false;

    this.scrolling  = false;
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


  itemPosition(variable,container = this.selecteds) {
    return _.findIndex(container, {
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
  changeAggregatorOrder(variable, order) {
    _.remove(this.aggregators, {
      'id': variable.id
    });
    $(".-hovered").removeClass("-hovered");
    this.aggregators.splice(order - 1, 0, variable);
  }
  isSelected(variable, container) {
    return _.find(container, {
      'id': variable.id
    });
  }
  deleteAll(container,filter) {
    this._deleteallmodal.open({deleting: (container=='aggregators')?"Aggregators":"Selected Variables"})
    .then(response => {
      if (response) {
        const filters = this._filter("filterBy")(this[container], filter);
        const ids = _.map(filters, item => item.id);
        this[container] = _.reject(this[container], item => _.includes(ids, item.id));
      }
    });
  }
  onDrop(id, binId) {
    if((/agg\_/i).test(id) || (/agg\_/i).test(binId)) return false;
    let from =  _.parseInt(id.split('_')[0]) - 1;
    let to = _.parseInt(binId.split('_')[0]) - 1;
    let variable = this.selecteds[from];

    this.changeOrder(this.selecteds[from], to + 1);
  }
  onAggregatorDrop(id, binId) {
    if(!(/agg\_/i).test(id) || !(/agg\_/i).test(binId)) return false;
    let from =  _.parseInt(id.replace("agg_","").split('_')[0]) - 1;
    let to = _.parseInt(binId.replace("agg_","").split('_')[0]) - 1;
    let variable = this.aggregators[from];

    this.changeAggregatorOrder(this.aggregators[from], to + 1);
  }
  toggle(variable, container = this.selecteds) {
    this.isSelected(variable, container) ?
      _.remove(container, { 'id': variable.id }) :
      this.hideTooltip();
  }


  scrollTo(binId) {
    if ( !this.scrolling ) {
      let list = { e: $(".selected-list") };
      list.top = list.e.offset().top;
      list.height = list.e.height();
      list.bottom = list.top + list.height;

      let container = { e: $(".selected-list .mCSB_container") };
      container.top = container.e.position().top;
      container.height = container.e.height();
      container.bottom = container.top + container.height;

      let dragger = { e: $(".selected-list .mCSB_dragger") };
      dragger.height = dragger.e.height();

      let item = { e: $("#"+binId) };
      item.top = item.e.offset().top;
      item.height = item.e.height();
      item.bottom = item.top + item.height;

      if ( !item.e.hasClass('last') && !item.e.hasClass('first') ) {
        let timeout = this._timeout.bind(this);
        let move = item.height * 5;

        if ( (item.top - (item.height * 0.9)) < list.top && list.top < item.bottom ) {
          this.scrolling = true;
          container.top += move;
          container.top = container.top > 0 ? 0 : container.top;
        }
        if ( item.top < list.bottom && list.bottom < (item.bottom + item.height) ) {
          this.scrolling = true;
          container.top -= move;
          container.top = container.top < (list.height - container.height) ? (list.height - container.height) : container.top;
        }
        if ( this.scrolling ) {
          container.e.css({top: container.top});
          timeout(() => {
            this.scrolling = false;
            dragger.e.css({top: (container.top / (list.height - container.height)) * (list.height - dragger.height)});
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
