class UalDataSourceController {
  /*@ngInject*/
  constructor($rootScope, ualDataSourceChangeModal, DataSource, ualDataSourceCancelModal, ualTooltipService, $timeout) {
    this._datasource = DataSource;
    this._cancelmodal = ualDataSourceCancelModal;
    this._changemodal = ualDataSourceChangeModal;
    this._ualTooltipService = ualTooltipService;
    this._timeout = $timeout;

    this.searchTerm;
    this.datasources;
    this.rootScope = $rootScope;
    this.selected;
  }


  isActive(itemId) {
    return !!this.selected.get() && this.selected.get().id === itemId;
  }

  isFirstInGroup(index) {
    let result = false;
    var currentItem = this.datasources[index];
    var previousItem = index >= 1 ? this.datasources[index - 1] : undefined;
    if (!previousItem || previousItem.group.groupId != currentItem.group.groupId) {
      result = true;
    }
    return result;
  }

  filterData() {
    this._timeout(() => {
      this.total = 0;
      this.groupsTotals = [];
      _.forEach(this.datasources, (item) => {
        let noFilter = !this.searchTerm || _.isEmpty(this.searchTerm);
        let hasMatch = (!!this.searchTerm && !!item) && item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
        item.show = noFilter || hasMatch;

        let sum = item.show ? 1 : 0;
        this.total  += sum;
        let groupCount = this.groupsTotals[item.group.groupId] || 0;
        this.groupsTotals[item.group.groupId] = groupCount + sum;

      });
    }, 0);
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
        console.dir(this.datasources);
        this.filterData();
      });
  }
}

export default UalDataSourceController;
