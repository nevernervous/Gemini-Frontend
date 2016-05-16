class UalDataSourceController {
  /*@ngInject*/
  constructor($rootScope, DataSource, ualDataSourceChangeModal, ualDataSourceCancelModal, ualTooltipService) {
    this._datasource = DataSource;
    this._cancelmodal = ualDataSourceCancelModal;
    this._changemodal = ualDataSourceChangeModal;
    this._ualTooltipService = ualTooltipService;

    this.searchTerm = {};

    this.datasources;

  }

  isActive(itemId) {
    return (!!this.selected.get()) && this.selected.get().id === itemId;
  }

  toogleSelected(item) {
    this.selected.set(item);
    this.hideTooltip();
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
