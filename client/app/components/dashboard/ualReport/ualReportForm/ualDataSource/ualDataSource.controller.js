class UalDataSourceController {
  /*@ngInject*/
  constructor($rootScope,ualDataSourceChangeModal, DataSource, ualDataSourceCancelModal, ualTooltipService) {
    this._datasource = DataSource;
    this._cancelmodal = ualDataSourceCancelModal;
    this._changemodal = ualDataSourceChangeModal;
    this._ualTooltipService = ualTooltipService;

    this.searchTerm = {};
    this.datasources;
    this.rootScope = $rootScope;
    this.selected;
  }


  isActive(itemId) {
    return !!this.selected.get() && this.selected.get().id === itemId;
  }

  isFirstInGroup(index){
    let result = false;
    var previousItem = index >= 1 ? this.datasources[index -1] : undefined;
    var currentItem = this.datasources[index];
    if(!previousItem || previousItem.group.groupId != currentItem.group.groupId){
      result = true;
    }
    return result;
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
    this.onChange();
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
