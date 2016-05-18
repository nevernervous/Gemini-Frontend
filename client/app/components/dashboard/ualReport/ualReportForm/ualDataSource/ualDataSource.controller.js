import $ from 'jquery';

class UalDataSourceController {
  /*@ngInject*/
  constructor($rootScope, DataSource, ualDataSourceChangeModal, ualDataSourceCancelModal, $filter, ualTooltipService) {
    this._datasource = DataSource;
    this._cancelmodal = ualDataSourceCancelModal;
    this._changemodal = ualDataSourceChangeModal;
    this._filter = $filter;
    this._ualTooltipService = ualTooltipService;

    this.searchTerm = {};
    this.datasources;
    this.selected;

  }

  shouldShow(group) {
    return this._filter("filterBy")(group.items, this.searchTerm).length > 0;
  }

  isActive(itemId) {
    return (this.selected) && this.selected.id === itemId;
  }

  toogleSelected(item) {
    this.hideTooltip();
    this._changemodal.open({ oldDataSource: this.selected, newDataSource: item })
      .then(response => {
        if (response) {
          this.selected = item;
        }
      });

  }

  hideTooltip() {
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
