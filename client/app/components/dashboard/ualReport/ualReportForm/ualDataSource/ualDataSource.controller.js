import $ from 'jquery';

class UalDataSourceController {
  /*@ngInject*/
  constructor($rootScope,ualDataSourceChangeModal, DataSource, ualDataSourceCancelModal, $filter, ualTooltipService) {
    this._datasource = DataSource;
    this._cancelmodal = ualDataSourceCancelModal;
    this._filter = $filter;
    this._changemodal = ualDataSourceChangeModal;
    this._ualTooltipService = ualTooltipService;

    this.searchTerm = {};
    this.datasources;
    this.rootScope = $rootScope;
    this.selected;
  }
  shouldShow(group) {
    return this._filter("filterBy")(group.items, this.searchTerm).length > 0;
  }

  isActive(itemId) {
    return !!this.selected.get() && this.selected.get().id === itemId;
  }

  selectedDataSource(item) {
    this.hideTooltip();
    var datasourceOld = this.selected.get();
    var datasourceNew = item;
    if (!!datasourceOld) {
      if (!this.selected.equal(datasourceNew) && this.hasVariables) {
        this._changemodal.open({ oldDataSource: datasourceOld, newDataSource: datasourceNew })
          .then(response => {
            if (response) {
              this.setDatasource(datasourceNew);
            }
          });
      } else {
        this.setDatasource(datasourceNew);
      }
    } else {
      this.setDatasource(datasourceNew);
    }

  }

  setDatasource(item) {
    this.onChange({ datasourceNew: item, datasourceOld: this.selected.get() });
    this.selected.set(item);
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
