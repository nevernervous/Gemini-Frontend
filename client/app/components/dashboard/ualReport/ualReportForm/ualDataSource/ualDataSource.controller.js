class UalDataSourceController {
    /*@ngInject*/
    constructor($rootScope, close, DataSource, selected, ualDataSourceChangeModal, ualDataSourceCancelModal, $filter, $animate) {
        this._close = close;
        this._datasource = DataSource;
        this._cancelmodal = ualDataSourceCancelModal;
        this._changemodal = ualDataSourceChangeModal;
        this._selected = selected;
        this._filter = $filter;
        this.searchTerm = {};

        this._animate = $animate;
        this._selectedTooltip = "";

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
      let total = ( this.datasources.items.length + this.datasources.groups.length ) * 36;
      let $container = angular.element(document.getElementById("content-list"))[0];
      let rows = Math.ceil(total / $container.clientHeight);

      this.columns = rows > 3 ? "columns-4" : "columns-" + rows;
    }

    // checkOverflow() {
    //     if (this.finishItemRender) {
    //         let $marker = angular.element(document.getElementById("overflow-marker"))[0];
    //         let $container = angular.element(document.getElementById("content-list"))[0];
    //         let $resizableContainer = angular.element(document.getElementById("resizable-container"))[0];
    //         let $dataSourceList = angular.element(document.getElementById("data-source-list"))[0];

    //         if (!$marker || !$container) {
    //             return;
    //         }

    //         let markerWidth = $marker.offsetLeft;
    //         let containerWidth = $container.clientWidth;

    //         let hasHorizontalOverflow = markerWidth > containerWidth;
    //         let needHorizontalFill = $container.clientHeight > $resizableContainer.clientHeight;
    //         let action = (!(hasHorizontalOverflow || !needHorizontalFill)) ? "addClass" : "removeClass" ;

    //         this._animate[action]($dataSourceList, '-horizontal-fill').then(() => {
    //                 this.hasLoaded = true;
    //             });

    //     }
    // }

    showTooltip(e){
      let datasourceItem = $("#"+e.target.id);
      if (e.target.nodeName == 'UAL-DATA-SOURCE-ITEM') {
        let tooltip = datasourceItem.find("ual-tooltip");
        tooltip.prop("ual-tooltip-show", true);
        this._selectedTooltip = tooltip.prop("id");
      }
    }

    hideTooltip(){
      $("#"+this._selectedTooltip).prop("ual-tooltip-show", false);
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
