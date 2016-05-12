import $ from 'jquery';

class UalDataSourceController {
    /*@ngInject*/
    constructor($rootScope, DataSource,  ualDataSourceChangeModal, ualDataSourceCancelModal, $filter, $timeout, ualTooltipService) {
        this._datasource = DataSource;
        this._cancelmodal = ualDataSourceCancelModal;
        this._changemodal = ualDataSourceChangeModal;
        this._filter = $filter;
        this._timeout = $timeout;
        this._ualTooltipService = ualTooltipService;

        this.searchTerm = {};

        this.datasources;

    }

    apply() {
        if (this.selected && this.hasChange()) { // FIRST TIME
            this._changemodal.open({ oldDataSource: this.selected, newDataSource: this.selected })
                .then(response => response && this._closemodal(this.selected));
        } else {
            this._closemodal(this.selected);
        }

    }
    cancel() {
        if (this.hasChange()) {
            this._cancelmodal.open()
                .then(response => response && this._closemodal(this.selected));
        } else {
            this._closemodal(this.selected);
        }
    }

    hasChange() {
        return (!this.selected && this.selected) || (this.selected && this.selected && (this.selected.id !== this.selected.id));
    }

    shouldShow(group) {
        return this._filter("filterBy")(group.items, this.searchTerm).length > 0;
    }

    isActive(itemId) {
        return (this.selected) && this.selected.id === itemId;
    }

    toogleSelected(item) {
        this.selected = item;
        this.hideTooltip();
    }

    hideTooltip(){
      this._ualTooltipService.hide();
    }


    $onInit() {
      this._datasource.all('group')
      .then(response => {
        this.datasources = response.data;
      });
    }
}

export default UalDataSourceController;
