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
    this.rootScope = $rootScope;
  }
  shouldShow(group) {
    return this._filter("filterBy")(group.items, this.searchTerm).length > 0;
  }

  isActive(itemId) {
    return (!!this.selected && !!this.selected.get()) && this.selected.get().id === itemId;
  }

  toogleSelected(item) {
    this.selected.set(item);
    this.hideTooltip();
    this.rootScope.$broadcast('UALDATASOURCE.TOGGLE','report-datasource');    
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
