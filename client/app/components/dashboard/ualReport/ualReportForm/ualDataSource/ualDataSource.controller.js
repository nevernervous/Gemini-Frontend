import $ from 'jquery';

class UalDataSourceController {
    /*@ngInject*/
    constructor($rootScope, close, DataSource, selected, ualDataSourceChangeModal, ualDataSourceCancelModal, $filter, $animate, $timeout) {
        this._close = close;
        this._datasource = DataSource;
        this._cancelmodal = ualDataSourceCancelModal;
        this._changemodal = ualDataSourceChangeModal;
        this._selected = selected;
        this._filter = $filter;
        this._timeout = $timeout;
        this.searchTerm = {};

        this._animate = $animate;

        this.datasources;
        this.selected = selected;
        this._initialize();

        this._suscriptions = [];
        this._suscriptions.push($rootScope.$on('SESSION.LOGOUT', () => this._closemodal(true)));
        this._suscriptions.push($rootScope.$on('SESSION.EXPIRED', () => this._closemodal(true)));
        this._suscriptions.push($rootScope.$on('RENDER.END', () => this.columnCount()));
        this._suscriptions.push($rootScope.$on('$stateChangeSuccess', () => this._closemodal(false)));
    }

    _closemodal(response) {
        this._suscriptions.forEach(suscription => suscription());
        this._close(response);
    }

    apply() {
        if (this._selected && this.hasChange()) { // FIRST TIME
            this._changemodal.open({ oldDataSource: this._selected, newDataSource: this.selected })
                .then(response => response && this._closemodal(this.selected));
        } else {
            this._closemodal(this.selected);
        }

    }
    cancel() {
        if (this.hasChange()) {
            this._cancelmodal.open()
                .then(response => response && this._closemodal(this._selected));
        } else {
            this._closemodal(this._selected);
        }
    }

    hasChange() {
        return (!this._selected && this.selected) || (this._selected && this.selected && (this._selected.id !== this.selected.id));
    }

    shouldShow(group) {
        return this._filter("filterBy")(group.items, this.searchTerm).length > 0;
    }

    isActive(itemId) {
        return (this.selected) && this.selected.id === itemId;
    }

    toogleSelected(item) {
        this.selected = this.isActive(item.id) ? null : item;
        this.hideTooltip();
    }

    columnCount() {
      if(this._columnCountPromise){
        this._timeout.cancel(this._columnCountPromise);
      }
      this._columnCountPromise = this._timeout( () => {
        let total_items = this._filter("filterBy")(this.datasources.items, this.searchTerm).length;
        let total_groups = 0;

        // NOTE: REMOVED FOR PERFORMANCE ISSUES
        // let total_groups = _.reduce(this.datasources.groups, (total, group) => {
        //   return total += this.shouldShow(group) ? 1 : 0
        // }, 0 );

        let total = ( total_items + total_groups ) * 36;
        let $container = angular.element(document.getElementById("content-list"))[0];
        let rows = Math.ceil(total / $container.clientHeight);

        this.columns = rows > 3 ? "columns-4" : "columns-" + rows;
        $('content-list').mCustomScrollbar("update");
      }, 750);
    }

    showTooltip(e){
      let datasource = $("#"+e.target.id);

      if (e.target.nodeName == 'UAL-DATA-SOURCE-ITEM') {
        let span = datasource.find("span:eq(0)");
        let offset = span.offset();
        let parentWidth = span.width();
        let childWidth = datasource.find("span:eq(1)").width();
        let tooltip = datasource.find("ual-tooltip");

        offset.left = (childWidth > parentWidth ?  (parentWidth + 5) : (childWidth + 10)) + offset.left;
        offset.top -= ((tooltip.height() / 2) - ((span.height() / 2) ) );
        offset.top += window.isIE  ? 2 : 5;

        tooltip.removeClass("-hide-tooltip").addClass("-show-tooltip");
        tooltip.css(offset);
      }
    }

    hideTooltip(){
      $(".-show-tooltip").removeClass("-show-tooltip").addClass("-hide-tooltip");
    }

    _initialize() {
      this.columns = "columns-1";
      this._datasource.all('group')
      .then(response => {
        this.datasources = response.data;
      });
    }
}

export default UalDataSourceController;
